import React, { createContext, useReducer } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const initialState = {
    pills: false,
    outlined: false,
    data: {
      profile: {
        first_name: "Shashwat",
        last_name: "Gupta",
        maiden_name: "",
        address: "",
        birth_date: "Dec 1",
        headline:
          "Full Stack Developer(MERN) | Technical Product Manager at Vibecheck Goa",
        summary:
          "Fresher at VIT vellore | Programming | Debating | Entrepreneurship",
        industry: "Information Technology & Services",
        zip_code: "",
        geo_location: "Ahmedabad, Gujarat, India",
        twitter_handles: "",
        websites: "",
        instant_messengers: "",
      },
      certifications: [
        {
          name: "JavaScript (Basic)",
          url: "https://www.hackerrank.com/certificates/2916c84be0d7",
          authority: "HackerRank",
          started_on: "Apr 2020",
          finished_on: "",
          license_number: "2916C84BE0D7",
        },
        {
          name: "Raact (Basic)",
          url: "https://www.hackerrank.com/certificates/70149a7a7c1c",
          authority: "HackerRank",
          started_on: "Apr 2021",
          finished_on: "",
          license_number: "70149A7A7C1C",
        },
        {
          name: "CSS",
          url: "https://www.hackerrank.com/certificates/2f3b60ed4362",
          authority: "HackerRank",
          started_on: "Apr 2021",
          finished_on: "",
          license_number: "2F3B60ED4362",
        },
        {
          name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
          url: "https://www.credly.com/badges/a08f7302-4651-4033-afe4-dd7dabb9883a?source=linked_in_profile",
          authority: "Amazon Web Services (AWS)",
          started_on: "Aug 2021",
          finished_on: "",
          license_number: "",
        },
        {
          name: "AWS Certified Cloud Practitioner",
          url: "https://www.credly.com/badges/7181c030-87a9-400c-ab85-e5b1c1cd258f?source=linked_in_profile",
          authority: "Amazon Web Services (AWS)",
          started_on: "Aug 2021",
          finished_on: "Aug 2024",
          license_number: "",
        },
      ],
      education: [
        {
          school_name: "VIT_Vellore Institute of Technology",
          start_date: "2019",
          end_date: "2023",
          notes: "",
          degree_name: "Bachelor of Technology - BTech",
          activities: "",
        },
        {
          school_name: "Delhi Public School - Bopal, Ahmedabad",
          start_date: "2013",
          end_date: "2019",
          notes: "",
          degree_name: "High School",
          activities: "member innovators club",
        },
        {
          school_name: "Delhi Public School - Bopal, Ahmedabad",
          start_date: "2012",
          end_date: "2019",
          notes: "",
          degree_name: "",
          activities: "",
        },
      ],
      positions: [
        {
          company_name: "Vibecheck Goa",
          title: "Technical Product Manager",
          description: "",
          location: "Goa, India",
          started_on: "Aug 2021",
          finished_on: "",
        },
        {
          company_name: "GirlScript Summer of Code",
          title: "Mentor",
          description: "",
          location: "India",
          started_on: "Mar 2021",
          finished_on: "",
        },
        {
          company_name: "Codechef-VIT",
          title: "core team member",
          description: "",
          location: "Vellore, Tamil Nadu, India",
          started_on: "Nov 2019",
          finished_on: "",
        },
        {
          company_name: "VIT Spartans",
          title: "core team member",
          description: "",
          location: "India",
          started_on: "Nov 2019",
          finished_on: "",
        },
        {
          company_name: "Apple Developers Group (ADG-VIT)",
          title: "core team member",
          description: "",
          location: "India",
          started_on: "Nov 2019",
          finished_on: "",
        },
        {
          company_name: "debate society vit",
          title: "core team member",
          description: "",
          location: "India",
          started_on: "Nov 2019",
          finished_on: "",
        },
        {
          company_name: "Dream Merchants VIT",
          title: "core team member",
          description: "",
          location: "",
          started_on: "Nov 2019",
          finished_on: "",
        },
        {
          company_name: "Josh Talks",
          title: "Intern",
          description: "Revamping JoshTalks Website",
          location: "",
          started_on: "Aug 2020",
          finished_on: "Dec 2020",
        },
      ],
      skills: [
        { name: "Computer Science" },
        { name: "Programming" },
        { name: "SQL" },
        { name: "Python (Programming Language)" },
        { name: "C (Programming Language)" },
        { name: "C++" },
      ],
    },
    educationCount: 2,
    CCount: 5,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, data: action.payload };
      case "SET_EDC":
        return { ...state, educationCount: action.payload };
      case "SET_CC":
        return { ...state, CCount: action.payload };
      case "SET_PILLS":
        return { ...state, pills: action.payload };
      case "SET_OUTLINED":
        return { ...state, outlined: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UIContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </UIContext.Provider>
  );
};
