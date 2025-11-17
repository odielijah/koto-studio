export const baseBenefits = [
    {
      number: "01",
      title: "Annual leave",
      content: `We encourage everyone to take time off to rest and recharge. 
        You’ll get up to 30 days plus bank holidays. We also close over the festive period.`,
    },
    {
      number: "02",
      title: "Work from anywhere",
      content:
        "As well as your annual leave, you’ll also get ten days to work remotely from anywhere else in the world.",
    },
    {
      number: "03",
      title: "Working from other Koto studios",
      content:
        "You can apply to work from any of the other Koto studios for a fixed period of time.",
    },
    {
      number: "04",
      title: "Working from home",
      content:
        "We believe we do our best work in person. But on Fridays feel free to work from home.",
    },
    {
      number: "05",
      title: "Becoming a parent",
      content: `Koto offers an additional eight weeks of fully paid parental leave (Koto Paid Parental Leave) 
          for employees eligible for parental leave under the Parental Leave Act (Gesetz zum Elterngeld und zur Elternzeit, BEEG).`,
    },
    {
      number: "06",
      title: "Health and wellbeing",
      content: `To take care of your physical and emotional health, we’ll provide you with comprehensive health insurance through DKV.
         In addition, you ‘ll receive €50 each month on your Givve card.`,
    },
    {
      number: "07",
      title: "Annual bonus",
      content:
        "All employees have the potential for a discretionary annual bonus of up to 10% of their salary.",
    },
    {
      number: "08",
      title: "Years of service",
      content:
        "After five years of service, you’ll get €5,000 and five extra days’ holiday. After ten years, you’ll get €10,000 and four weeks’ additional holiday.",
    },
    {
      number: "09",
      title: "Regular socials",
      content:
        "We create opportunities to spend time together, not working. From free gallery and cinema trips to fitness, and plenty in between.",
    },
    {
      number: "10",
      title: "Global get-togethers",
      content:
        "We operate as one big global team, so we make time to get everyone together in one place as often as possible.",
    },
    {
      number: "11",
      title: "Flexible hours",
      content:
        "We work an eight hour day with core hours between 10-5pm. Outside of those hours, you can arrive a bit earlier or leave a bit later depending on your plans.",
    },
    {
      number: "12",
      title: "Personal progression",
      content: `We hold biannual reviews to give 360 feedback and take the opportunity to celebrate a job well done, 
        with salary reviews taking place at the end of each year. We also make sure you get regular, meaningful access 
        to your manager to support your personal development and career growth.`,
    },
    {
      number: "13",
      title: "Transparent salary brackets",
      content:
        "We make available all salary bands and job descriptions to create fair and open opportunities for everyone.",
    },
    {
      number: "14",
      title: "Pension contributions",
      content:
        "If you choose to join our company pension, Koto will also make a further contribution.",
    },
    {
      number: "15",
      title: "Continuous learning",
      content: `We offer a range of different learning options through YCN, tailored to your needs. 
        It includes hundreds of online and in-person courses. Plus we also organize regular learning lunches in the studio and attend talks together.`,
    },
    {
      number: "16",
      title: "Food and drink",
      content:
        "We provide free breakfast, snacks and drinks in our well-stocked kitchen.",
    },
  ];
  
  const overrides = {
    london: {}, // same as base
    berlin: {}, // same as base
  
    // Use the same keys as the filter labels so lookups work correctly
    "los angeles": {
      13: {
        // index 13 = benefit number 14
        title: "401K",
        content: "We offer a 401K and match contributions up to 4%.",
      },
    },
  
    "new york": {
      13: {
        title: "401K",
        content: "We offer a 401K and match contributions up to 4%.",
      },
    },
  
    sydney: {
      // Remove pension contributions (index 13 in baseBenefits)
      remove: [5, 13],
    },
  };
  
  export const benefitsData = Object.fromEntries(
    Object.entries(overrides).map(([location, override]) => {
      let list = baseBenefits
        .map((item, index) => {
          // Remove items for Sydney (or any location that defines `remove`)
          if (override.remove?.includes(index)) return null;
  
          // Override only the benefit at this index
          if (override[index]) {
            return { ...item, ...override[index] };
          }
  
          // Default
          return item;
        })
        .filter(Boolean);
  
      // For Sydney, renumber remaining items sequentially (01, 02, 03, ...)
      if (location === "sydney") {
        list = list.map((item, idx) => ({
          ...item,
          number: String(idx + 1).padStart(2, "0"),
        }));
      }
  
      return [location, list];
    })
  );
  