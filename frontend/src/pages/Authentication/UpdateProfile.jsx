import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import PageLoader from "../../components/custom/PageLoader";
import { getUser, updateProfilePhoto } from "../../api/userApi";
import { updateUserDetails } from "../../api/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updatingPhoto, setUpdatingPhoto] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [profileImg, setProfileImg] = useState();
  const [message, setMessage] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset, // Used to reset form values
  } = useForm();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await getUser(setLoading);
      if (data) {
        delete data.user.profile_photo;
        console.log(data);
        reset(data.user); // Reset the form with the fetched user data
      }
      if (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [reset]);

  const {
    fields: workExperienceFields,
    append: addWorkExperience,
    remove: removeWorkExperience,
  } = useFieldArray({ control, name: "work_experience" });

  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({ control, name: "educational_details" });

  const onSubmit = async (d) => {
    console.log(d);
    delete d.account_type;
    const { data, error } = await updateUserDetails(d, setUpdateLoading);
    if (data) {
      console.log(data);

      const { data: userData, err } = await getUser(setLoading);
      if (userData) {
        delete userData.user.profile_photo;
        reset(userData.user);
      }
      if (err) {
        console.error(err);
      }
    }

    if (error) {
      console.error(error);
    }

    toast.success("Update Successfull");
  };

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setProfileImg(selectedFile);
      setPreviewPhoto(URL.createObjectURL(selectedFile));
    }
  };

  const updateProfileImage = async () => {
    if (!profileImg) {
      setMessage("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", profileImg);

    toast.promise(updateProfilePhoto(formData, setUpdatingPhoto), {
      pending: "Updating Profile Photo",
      success: "Profile Photo updated 👌",
      error: "Server error 🤯",
    });

    // const { data, error } = await updateProfilePhoto(
    //   formData,
    //   setUpdatingPhoto
    // );
    // if (data) {
    //   console.log(data);
    // }

    // if (error) {
    //   console.log(error);
    // }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="w-full bg-gray-900 text-white min-h-screen p-10 md:p-40">
        <h2 className="text-3xl font-bold mb-6">Update Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Photo */}
          <div className="w-full flex flex-col gap-8 items-center md:flex-row md:gap-0">
            <div className="w-24 h-24 rounded-full bg-gray-800">
              {previewPhoto ? (
                <img
                  src={previewPhoto}
                  alt="Profile Preview"
                  className="w-24 h-24 object-cover"
                />
              ) : (
                <span className="flex items-center justify-center text-sm text-gray-500 h-full">
                  No Photo
                </span>
              )}
            </div>
            <div className="w-full mx-auto flex flex-col items-center md:block md:ml-4">
              <label className="block text-sm font-medium mb-2 ">
                Upload Profile Photo
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("profilePhoto")}
                onChange={handlePhotoChange}
                className="block text-gray-400"
              />
              {message && <p className="text-red-400">{message}</p>}
            </div>
            <div>
              <button
                className="bg-gradient-to-tr from-violet-500 to-fuchsia-500 px-2 py-1 rounded-md hover:bg-gradient-to-tl mb-10 cursor-pointer disabled:opacity-75"
                disabled={!profileImg || updatingPhoto}
                onClick={updateProfileImage}
              >
                Change Photo
              </button>
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                {...register("bio")}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                {...register("firstname")}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                {...register("lastname")}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              disabled
              {...register("email")}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Mobile Number
            </label>
            <input
              {...register("mobile_no", {
                required: "Mobile number is required",
              })}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <input
              {...register("country")}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Hourly Rate
            </label>
            <input
              {...register("hourly_rate")}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            {workExperienceFields.map((item, index) => (
              <div key={item.id} className="space-y-4 mb-4">
                <input
                  {...register(`work_experience.${index}.company`, {
                    required: "Company name is required",
                  })}
                  placeholder="Company name"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <input
                  {...register(`work_experience.${index}.job_title`, {
                    required: "Company name is required",
                  })}
                  placeholder="Job title"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <input
                  {...register(`work_experience.${index}.duration`, {
                    required: "How long you have been worked",
                  })}
                  placeholder="Years of experience"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeWorkExperience(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addWorkExperience({ company: "", role: "" })}
              className="px-4 py-2 bg-blue-600 rounded text-white"
            >
              Add Work Experience
            </button>
          </div>

          {/* Educational Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Educational Details</h3>
            {educationFields.map((item, index) => (
              <div key={item.id} className="space-y-4 mb-4">
                <input
                  {...register(`educational_details.${index}.degree`, {
                    required: "Degree is required",
                  })}
                  placeholder="Degree"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <input
                  {...register(`educational_details.${index}.field`, {
                    required: "Institution is required",
                  })}
                  placeholder="Institution"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <input
                  {...register(`educational_details.${index}.institute`, {
                    required: "Institution is required",
                  })}
                  placeholder="Institution"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addEducation({ degree: "", institution: "" })}
              className="px-4 py-2 bg-blue-600 rounded text-white"
            >
              Add Educational Detail
            </button>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded bg-green-600 hover:bg-green-700 text-white"
            disabled={updateLoading}
          >
            {updateLoading ? (
              <div className="w-7 h-7 rounded-full mx-auto loader disabled:cursor-not-allowed"></div>
            ) : (
              "Update Profile"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfileUpdate;
