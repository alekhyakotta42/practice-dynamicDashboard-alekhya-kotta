const DynamicDashboard = () => {
  
  const username = "James";
  const is_premium = true; 
  const currentDate = new Date().toLocaleDateString();
  const tasks = [
    { taskName: "Complete React assignment", completed: true },
    { taskName: "Review component props", completed: false },
    { taskName: "Push code to GitHub", completed: false }
  ];

  return (
    <div>
       <p>Today's Date: {currentDate}</p>
      <h1>welcome, {username}!</h1>
      {is_premium ? (
        <p>Thank you for being a premium member!</p>
      ) : (
        <p>Upgrade to premium to enjoy exclusive features!</p>
      )}
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}
          style={{ color: task.completed ? "green" : "inherit" }}>
            {task.completed ? "✅ " : "❌ "}
            {task.taskName}
          </li>
        ))}
      </ul>
      <p>
        Completed tasks: {completedCount} | Incomplete tasks: {incompleteCount}
      </p>
    
    </div>
  );
};

export default DynamicDashboard;
