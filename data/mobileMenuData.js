const candidatesMenuData = [
    // Define the candidate-specific menu items here
    // Example:
    { name: "Profilim", routePath: "/candidates-dashboard/my-profile" },
];
  
const employerMenuData = [
    // Define the admin-specific menu items here
    // Example:
    { name: "Şirket Profili", routePath: "/employers-dashboard/company-profile" },
];
  
export default (userRole) => {
    const baseMenuData = [
      {
        id: 1,
        label: "Anasayfa",
        items: [
          {
            name: "Anasayfa",
            routePath: "/",
          },
        ],
      },
      {
        id: 2,
        label: "İş ilanları",
        items: [
          {
            name: "İş İlanları",
            routePath: "/job-list-v5",
          },
        ],
      },
      {
        id: 3,
        label: "Kariyer Fuarı",
        items: [
          {
            name: "Kariyer Fuarı",
            routePath: "/blog-list-v1",
          },
        ],
      },
    ];
  
    if (userRole === "user") {
      baseMenuData.push({
        id: 4,
        label: "Hesabım",
        items: candidatesMenuData,
      });
    } else if (userRole === "admin") {
      baseMenuData.push({
        id: 5,
        label: "Şirket Hesabı",
        items: employerMenuData,
      });
    }
  
    // Default menu structure for guests can be extended here
  
    return baseMenuData;
  };
  