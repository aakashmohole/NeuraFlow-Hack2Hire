const SessionInfoCard = ({ description }) => {
  return (
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-2">Session Highlights</h2>
      <p>{description}</p>
    </div>
  );
};

export default SessionInfoCard;
