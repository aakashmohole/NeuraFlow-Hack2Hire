const ClientProject = () =>{
    return(
        <>
         <main className="root">
        <section id="1" className="bg-[#030712] flex items-center justify-center min-h-screen text-gray-200">
            <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              
                    <h2 className="text-2xl lg:text-3xl font-semibold">Let's Start With A Strong TITLE.</h2>
                    <p className="text-gray-400 mt-2">
                        This helps your job post stand out to the right candidates. It's the first thing they'll see, so make it count!
                    </p>
        
                    <ul className="space-y-4">
                        <li className="flex items-center justify-center lg:justify-start gap-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                            <span>Answer a few questions and Post Your Project.</span>
                        </li>
                        <hr className="my-4 border-gray-600 opacity-35"/>
                        <li className="flex items-center justify-center lg:justify-start gap-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                            <span>Provide Clear Details.</span>
                        </li>
                        <hr className="my-4 border-gray-600 opacity-35"/>
                        <li className="flex items-center justify-center lg:justify-start gap-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                            <span>Set a Realistic Budget and Timeline.</span>
                        </li>
                        <hr className="my-4 border-gray-600 opacity-30"/>
                    </ul>
                </div>
        
             
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative max-w-md mx-auto">
                        <div className="mt-6">
                            <label for="job-title" className="block text-lg font-medium">
                                Set a Domain for your PROJECT post
                            </label><br/>
                            <input type="text" id="job-title" placeholder="Ex. Data Analyst"
                                className="block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"/>
                        </div>
        
                       
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Example titles</h2>
                            <ul className="list-disc list-inside mt-2 text-gray-300">
                                <li>Data analyst/BI expert to help automate a series of analytics reports</li>
                                <li>ETL engineer to integrate multiple data sources into a single dashboard</li>
                                <li>Python developer to help develop and evaluate NLP solutions</li>
                            </ul>
                        </div>
                    </div>
        
                    
                </div>
            </div>
        </section>
        

        <section id="2" className="bg-[#030712] flex items-center justify-center min-h-screen text-gray-200">
            <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
                
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 opacity-60">2/3</h1>
                    
                    <h2 className="text-2xl lg:text-3xl font-semibold">Let's Start, Upload Project Information..!!</h2>
                    <br/><br/>
                    <div className="mt-6">
                        <label for="job-title" className="block text-lg font-medium">Set a Title for your PROJECT post</label><br/>
                        <input type="text" id="job-title" placeholder="Ex. Recommendation System For Freelancers" 
                            className="block w-full lg:w-3/4 p-2.5 text-sm text-gray-900 bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"/>
                    </div>
                
                    <div className="w-full lg:w-3/4 mt-6">
                        <label for="message" className="block mb-2 text-lg font-medium">Description</label>
                        <textarea id="message" rows="4"
                            className="block w-full text-sm text-gray-900 bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                            placeholder="Describe Your Problem Statement Within 250 words only...!!"></textarea>
                    </div>
                </div>
        
                
                <div className="w-full lg:w-1/2 space-y-6">
                 
                <br/><br/><br/><br/>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Skills and Expertise Required</h2>
                        <div className="flex flex-col lg:flex-row items-center mt-2 gap-2">
                            <input type="text" id="skill-input" placeholder=" Add Skills"
                                className="block w-full lg:w-2/4 p-2 text-sm text-White-900 bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"/>
                            <button id="add-skill-btn"
                                className="w-full lg:w-auto py-2 px-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300">
                                +
                            </button>
                        </div>
                 
                        <div id="skills-container" className="flex flex-wrap gap-2 mt-3">
                 
                        </div>
                    </div>
        
                 <h2 className="text-lg font-semibold">Upload Project Proposal</h2>
                    <div
                        className="mt-1 flex flex-col lg:flex-row justify-center lg:justify-start items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-transparent">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex flex-col lg:flex-row text-sm text-gray-600">
                                <label for="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                </label>
                                <p className="pl-0 lg:pl-1">or drag and drop</p>
                            </div>
        
                            <p className="text-xs text-gray-500">doc, pdf, pptx minimum size 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="3" className="bg-[#030712] flex items-center justify-center min-h-screen text-gray-200 ">
            <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
               
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 opacity-60">3/3</h1>
                    <br/><br/>
                    <div className="mt-6">
                        <label for="job-title" className="block text-lg font-medium">Project Deadline</label><br/>
                        <select id="dateRange"
                            className="text-center w-full lg:w-1/2 bg-[#030712]/70 text-[#a8abbd] border border-gray py-2 px-3 rounded-full mx-0 lg:mx-1"
                            onchange="toggleCustomDate(this.value)">
                            <option value="7">7 Days</option>
                            <option value="15">15 Days</option>
                            <option value="30">30 Days</option>
                            <option value="90">3 Months</option>
                            <option value="180">6 Months</option>
                            <option value="custom">Custom</option>
                        </select>
        
                       
                        <br/><br/><input type="number" id="customDeadlineInput"
                            className="mt-2 p-4 w-full lg:w-3/4 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-black hover:bg-gray-800 transition-all duration-300"
                            placeholder="Enter Deadline" step="1" min="1" style= {{display: 'none'}}/>
                    </div>
                    
                    <div className="flex flex-col items-start space-y-4 mt-6">
                        <label for="job-title" className="block text-lg font-medium">Budget and Payment Terms</label>
                      
                        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
                            <label for="fixedRate" className="flex items-center space-x-2">
                                <input type="radio" id="fixedRate" name="rate" className="form-radio" onclick="toggleInputFields('fixedRate')" />
                                <span>Fixed Rate</span>
                            </label>
                            <label for="hourlyRate" className="flex items-center space-x-2">
                                <input type="radio" id="hourlyRate" name="rate" className="form-radio" onclick="toggleInputFields('hourlyRate')" />
                                <span>Hourly Rate</span>
                            </label>
                        </div>
        
                       
                        <div id="fixedRateInput" className="hidden">
                            <label for="fixedAmount" className="block">Enter Fixed Rate Amount:</label>
                            <input type="number" id="fixedAmount" name="fixedAmount"
                                className="mt-2 p-4 w-full lg:w-4/4 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-black hover:bg-gray-800 transition-all duration-300"
                                placeholder="Enter Amount in $" min="5" />
                        </div>
        
                       
                        <div id="hourlyRateRange" className="hidden">
                            <label for="hourlyRateRange" className="">Set Rate Per Hour</label>
                            <input type="range" id="hourlyRateRange" name="hourlyRateRange" min="5" max="500" step="5"
                                className="mt-1 w-full" oninput="updatePrice(this.value)"/>
                            <div className="flex justify-between text-gray-500">
                                <span id="minPrice">$5</span>
                                <span id="maxPrice">$500</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                
                <div className="w-full lg:w-1/2 space-y-6 text-center ">
                    <h2 className="text-2xl lg:text-3xl font-semibold lg:text-center">Let's Finish With Next and Post Your Project.</h2><br/>
                    <p className="text-white mt-6 opacity-50 lg:text-right">
                        To Find the best Freelancer Use Recommendation System
                    </p>
                    <ul className="space-y-4 lg:text-center">
                        <li className="flex justify-center lg:justify-end items-center gap-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                            <span className="text-gray-400 hover:text-white">Explore Best Freelancers.</span>
                        </li>
                        <hr className="my-4 border-gray-600 opacity-35"/>
                        <li className="flex justify-center lg:justify-end items-center gap-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                            <span className="text-gray-400 hover:text-white">Build Strong & Clear Communication.</span>
                        </li>
                        <hr className="my-4 border-gray-600 opacity-35"/>
                        <li className="flex justify-center lg:justify-end items-center gap-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
                            <span className="text-gray-400 hover:text-white">Set realistic expectations to avoid confusion.</span>
                        </li>
                    </ul>
        
                    <div className="mt-4 flex justify-center lg:justify-end">
                        <button type="button"
                            id="btn2"
                            className="w-full lg:w-1/4 py-3 px-6 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Post →
                        </button>
                    </div>
                </div>
            </div>
        
        </section>
      
        
</main>
        </>
    )
}
export default ClientProject