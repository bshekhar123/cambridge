const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Placeholder to toggle the menu when clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});


 // Function to hide the popup and show the landing page
 function showLandingPage() {
    document.querySelector('.popup-new').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show popup on page load
window.onload = function () {
    // Handle form submission
    document.querySelector('.popup-new').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.getElementById('registration-form').onsubmit = function (event) {
        event.preventDefault();  
        // Here you could add additional form validation or processing
        showLandingPage();
    };
};

document.addEventListener('DOMContentLoaded', function () {
    const courseSelect = document.getElementById('course');
    const specializationSelect = document.getElementById('specialization');

    const specializationOptions = {
        "Bachelors": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management"
        ],
        "MBA/PGDM - Masters (Management)": [
            "Architecture", "Arts", "Engineering", "Law", "Medicine", "Accounting", "Business", "Business Analytics",
            "Economics", "Energy and Power Engineering", "Entrepreneurship", "Finance", "Technology", "Hotel Management",
            "Human Resource Management", "Information Studies", "International Business", "Information Technology",
            "Marketing", "Project Management", "Real Estate", "Sports Sciences", "Supply Chain Management",
            "Tourism and Hospitality", "Sciences", "Computer Science and Engineering", "Leadership", "Social Studies",
            "Health Care"
        ],
        "Masters": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management", "Social Work"
        ],
        "Doctorate/Ph.D": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management"
        ],
        "Certificate": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management"
        ],
        "Grad Certificate": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management"
        ],
        "Diploma": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management"
        ],

        "PG Diploma": [
            "Agriculture", "Architecture", "Arts", "Design", "Engineering", "Environmental Studies", "Humanities",
            "Journalism", "Law", "Mathematics", "Medicine", "Natural Sciences", "Accounting", "Actuarial Science",
            "Aerospace Engineering", "Agribusiness", "Animal Sciences", "Anthropology", "Archaeology", "Astronomy",
            "Automotive Engineering", "Biology", "Biotechnology", "Business", "Business Analytics", "Chemical Engineering",
            "Chemistry", "Civil Engineering", "Commerce", "Communication Studies", "Counselling", "Culinary Arts",
            "Data Science and Analytics", "Dentistry", "Earth Sciences", "Ecology", "Economics", "Education",
            "Electrical and Electronics Engineering", "Electronic and Communications Engineering", "Disaster Management",
            "Energy and Power Engineering", "Entrepreneurship", "European Studies", "Event Management", "Fashion Design",
            "Film, Photography and Media", "Finance", "Food Science", "Forensic Sciences", "Forestry", "Gender Studies",
            "Technology", "Geography", "Graphic Design", "History", "Horticulture", "Hotel Management",
            "Human Resource Management", "Industrial Engineering", "Information Studies", "Interior Design",
            "International Business", "Information Technology", "Language", "Library Sciences", "Literature",
            "Marine Sciences", "Marketing", "Materials Sciences", "Mechanical Engineering", "Media Studies",
            "Microbiology", "Mining Engineering", "Music", "Neuroscience", "Nursing", "Pharmacy", "Physics",
            "Physiotherapy", "Plant Sciences", "Political Science", "Project Management", "Psychology", "Public Policy",
            "Public Relations", "Real Estate", "Theology", "Retail Management", "Risk Management", "Robotics",
            "Soil Science", "Sports Sciences", "Statistics", "Supply Chain Management", "Tourism and Hospitality",
            "Toxicology", "Veterinary", "Games Development", "Visual Arts", "Aboriginal Studies", "Animation", "Sciences",
            "Atmospheric Science", "Aviation", "Biochemistry", "Bioinformatics", "Clinical Science", "Fine Arts",
            "Genetics", "Human Science", "Immunology", "Instructional Design", "Instrumentation and Control Engineering",
            "Kinesiology", "Leadership", "Nanotechnology", "Nuclear Engineering", "Philosophy", "Social Studies",
            "Software Engineering", "Performing Arts", "Zoology", "Engineering Management", "Molecular Biology",
            "Urban Studies", "Construction Management", "Development Studies", "Epidemiology", "Health Care",
            "Artificial Intelligence and Machine Learning", "Acting", "Advertising", "Aeronautical Engineering",
            "Agricultural Economics", "Agricultural Engineering", "Banking", "Biomedical Studies", "Business Economics",
            "Chinese", "Construction Engineering", "Cyber Security", "Digital Marketing", "English", "Fisheries",
            "French", "Medical Laboratory Sciences", "Medical Technology", "MIS", "Network Engineering",
            "Operations Management", "Spanish", "Sustainable Studies", "Writing", "Computer Science", "Management"
        ],
        "MS/M.Sc - Masters (Science)": [
            "Architecture", "Engineering", "Environmental Studies", "Mathematics", "Medicine", "Natural Sciences", 
            "Accounting", "Biology", "Biotechnology", "Business", "Chemistry", "Civil Engineering", 
            "Data Science and Analytics", "Economics", "Education", "Electrical and Electronics Engineering", "Finance", 
            "Technology", "Geography", "Industrial Engineering", "Information Studies", "International Business", 
            "Information Technology", "Marketing", "Mechanical Engineering", "Nursing", "Pharmacy", "Physics", 
            "Psychology", "Statistics", "Sciences", "Computer Science and Engineering", "Leadership", "Social Studies", 
            "Health Care", "Biomedical Studies"
        ]
 
};

courseSelect.addEventListener('change', function () {
    const selectedCourse = courseSelect.value;
    const specializations = specializationOptions[selectedCourse] || [];

    // Clear previous options
    specializationSelect.innerHTML = '<option value="" disabled selected>Select Specialization</option>';

    // Add new options
    specializations.forEach(specialization => {
        const option = document.createElement('option');
        option.value = specialization;
        option.textContent = specialization;
        specializationSelect.appendChild(option);
    });
});
});
