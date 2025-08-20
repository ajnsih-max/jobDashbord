export async function GET() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Bhubaneswar",
      description: "We are looking for a skilled Frontend Developer with expertise in React, Next.js, and modern web technologies."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      location: "Mumbai",
      description: "Join our dynamic team as a Full Stack Developer. You'll work on both frontend and backend development."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Bangalore",
      description: "Creative UI/UX Designer needed to design beautiful and intuitive user interfaces."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Delhi",
      description: "DevOps Engineer to manage our cloud infrastructure, CI/CD pipelines, and deployment processes."
    },
    {
      id: 5,
      title: "Data Scientist",
      location: "Hyderabad",
      description: "Data Scientist to analyze complex data sets and build machine learning models."
    },
    {
      id: 6,
      title: "Mobile App Developer",
      location: "Chennai",
      description: "Mobile App Developer to create native and cross-platform mobile applications."
    },
    {
      id: 7,
      title: "Product Manager",
      location: "Pune",
      description: "Product Manager to drive product strategy and roadmap."
    },
    {
      id: 8,
      title: "QA Engineer",
      location: "Noida",
      description: "QA Engineer to ensure software quality through comprehensive testing."
    },
    {
      id: 9,
      title: "Cloud Architect",
      location: "Gurgaon",
      description: "Cloud Architect to design and implement scalable cloud solutions."
    },
    {
      id: 10,
      title: "Machine Learning Engineer",
      location: "Bangalore",
      description: "ML Engineer to develop and deploy machine learning models."
    },
    {
      id: 11,
      title: "Cybersecurity Analyst",
      location: "Mumbai",
      description: "Cybersecurity Analyst to protect our systems and data."
    },
    {
      id: 12,
      title: "Blockchain Developer",
      location: "Hyderabad",
      description: "Blockchain Developer to build decentralized applications."
    },
    {
      id: 13,
      title: "Game Developer",
      location: "Chennai",
      description: "Game Developer to create engaging gaming experiences."
    },
    {
      id: 14,
      title: "Network Engineer",
      location: "Delhi",
      description: "Network Engineer to design and maintain network infrastructure."
    },
    {
      id: 15,
      title: "Database Administrator",
      location: "Pune",
      description: "DBA to manage and optimize database systems."
    },
    {
      id: 16,
      title: "Technical Writer",
      location: "Noida",
      description: "Technical Writer to create clear documentation and user guides."
    },
    {
      id: 17,
      title: "Scrum Master",
      location: "Gurgaon",
      description: "Scrum Master to facilitate agile development processes."
    },
    {
      id: 18,
      title: "Business Analyst",
      location: "Mumbai",
      description: "Business Analyst to bridge business needs and technical solutions."
    },
    {
      id: 19,
      title: "Sales Engineer",
      location: "Bangalore",
      description: "Sales Engineer to provide technical expertise during sales process."
    },
    {
      id: 20,
      title: "Customer Success Manager",
      location: "Chennai",
      description: "Customer Success Manager to ensure customer satisfaction and retention."
    }
  ];

  return Response.json(jobs);
}