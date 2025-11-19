const employees = [
  {
    id: 1,
    firstName: "Rohan",
    email: "rohan.sharma@company.com",
    password: "Rohan@1234",
    tasks: [
      {
        taskTitle: "Sales Report Prep",
        taskDescription: "Prepare monthly sales report",
        taskDate: "2025-11-09",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client List Update",
        taskDescription: "Update client contact list",
        taskDate: "2025-11-05",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Product Demo Support",
        taskDescription: "Assist in product demo for new client",
        taskDate: "2025-11-06",
        category: "Client Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya.verma@company.com",
    password: "Priya@5678",
    tasks: [
      {
        taskTitle: "Dashboard Mockups",
        taskDescription: "Design UI mockups for new dashboard",
        taskDate: "2025-11-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Navbar Fix",
        taskDescription: "Fix navbar responsiveness issue",
        taskDate: "2025-11-07",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "API Collaboration",
        taskDescription: "Collaborate with backend team for API integration",
        taskDate: "2025-11-08",
        category: "Collaboration",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Color Palette Design",
        taskDescription: "Create color palette for new theme",
        taskDate: "2025-11-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Amit",
    email: "amit.patel@company.com",
    password: "Amit@9012",
    tasks: [
      {
        taskTitle: "Auth Module Test",
        taskDescription: "Test new authentication module",
        taskDate: "2025-11-09",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Bug Fix Login",
        taskDescription: "Resolve reported bug in user login flow",
        taskDate: "2025-11-07",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Error Docs",
        taskDescription: "Document error handling strategies",
        taskDate: "2025-11-08",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "DB Optimization",
        taskDescription: "Optimize database query for speed",
        taskDate: "2025-11-06",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Neha",
    email: "neha.singh@company.com",
    password: "Neha@3456",
    tasks: [
      {
        taskTitle: "Team Meeting Plan",
        taskDescription: "Plan and schedule team meeting",
        taskDate: "2025-11-09",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Intern Review",
        taskDescription: "Review intern progress reports",
        taskDate: "2025-11-07",
        category: "Supervision",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Client Presentation",
        taskDescription: "Prepare presentation for client review",
        taskDate: "2025-11-08",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Feedback Session",
        taskDescription: "Organize internal feedback session",
        taskDate: "2025-11-06",
        category: "Team Building",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Project Timeline Eval",
        taskDescription: "Evaluate project completion timeline",
        taskDate: "2025-11-05",
        category: "Planning",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Rahul",
    email: "rahul.nair@company.com",
    password: "Rahul@7890",
    tasks: [
      {
        taskTitle: "CI/CD Setup",
        taskDescription: "Setup CI/CD pipeline for project X",
        taskDate: "2025-11-10",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Server Deploy",
        taskDescription: "Deploy staging server for testing",
        taskDate: "2025-11-08",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Uptime Monitor",
        taskDescription: "Monitor server uptime and logs",
        taskDate: "2025-11-09",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Build Fix",
        taskDescription: "Fix pipeline build error",
        taskDate: "2025-11-06",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Script Update",
        taskDescription: "Update deployment scripts",
        taskDate: "2025-11-07",
        category: "Automation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
