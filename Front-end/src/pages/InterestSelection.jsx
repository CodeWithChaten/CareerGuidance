import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InterestOptions = [
    { 
        label: "Science & Technology", 
        value: "science-tech",
        icon: "🔬",
        description: "Physics, Chemistry, Biology, Computer Science"
    },
    { 
        label: "Engineering", 
        value: "engineering",
        icon: "⚙️",
        description: "Mechanical, Electrical, Civil, Software Engineering"
    },
    { 
        label: "Medical & Healthcare", 
        value: "medical",
        icon: "🏥",
        description: "MBBS, Nursing, Pharmacy, Physiotherapy"
    },
    { 
        label: "Commerce & Business", 
        value: "commerce",
        icon: "📊",
        description: "CA, MBA, Banking, Finance, Marketing"
    },
    { 
        label: "Arts & Humanities", 
        value: "arts",
        icon: "🎨",
        description: "Literature, History, Psychology, Fine Arts"
    },
    { 
        label: "Law & Legal Studies", 
        value: "law",
        icon: "⚖️",
        description: "LLB, Judiciary, Corporate Law, Criminal Law"
    },
    { 
        label: "Design & Creative", 
        value: "design",
        icon: "🎭",
        description: "Graphic Design, Fashion Design, Architecture"
    },
    { 
        label: "Sports & Fitness", 
        value: "sports",
        icon: "🏃‍♂️",
        description: "Sports Science, Physical Education, Coaching"
    }
];

const InterestSelectionPage = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the selected grade from the previous page
    const selectedGrade = location.state?.selectedGrade || "11th-12th";

    const handleInterestToggle = (interestValue) => {
        setSelectedInterests(prev => {
            if (prev.includes(interestValue)) {
                return prev.filter(interest => interest !== interestValue);
            } else {
                return [...prev, interestValue];
            }
        });
    };

    const handleContinue = () => {
        if (selectedInterests.length > 0) {
            console.log("Selected Grade:", selectedGrade);
            console.log("Selected Interests:", selectedInterests);
            
            // Save user interests to localStorage for persistence
            const userProfile = {
                selectedGrade,
                selectedInterests,
                timestamp: new Date().toISOString()
            };
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            
            // Navigate to quiz page with selected interests and grade
            navigate("/quiz", {
                state: {
                    selectedGrade,
                    selectedInterests
                }
            });
        }
    };

    const handleGoBack = () => {
        navigate("/getguidance");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">                   
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-10">
                        What Are Your Interests?
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        For <span className="font-semibold text-purple-600">{selectedGrade}</span> students, 
                        select the fields that interest you most. You can choose multiple options.
                    </p>
                </div>

                {/* Container with Light Blur Background */}
                <div className="relative">
                    {/* Background blur effect */}
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl"></div>
                    
                    {/* Content */}
                    <div className="relative p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                                Select Your Areas of Interest
                            </h2>
                            <p className="text-gray-600">
                                Choose multiple fields that excite you (minimum 1 required)
                            </p>
                        </div>

                        {/* Interest Options Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {InterestOptions.map((interest) => (
                                <button
                                    key={interest.value}
                                    onClick={() => handleInterestToggle(interest.value)}
                                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-left ${
                                        selectedInterests.includes(interest.value)
                                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                                            : 'border-gray-200 bg-white/50 text-gray-700 hover:border-purple-300 hover:bg-white/70'
                                    }`}
                                >
                                    <div className="flex items-start">
                                        <div className="text-3xl mr-4 flex-shrink-0">
                                            {interest.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-semibold">
                                                    {interest.label}
                                                </h3>
                                                {selectedInterests.includes(interest.value) && (
                                                    <svg 
                                                        className="w-5 h-5 text-purple-500 flex-shrink-0" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path 
                                                            fillRule="evenodd" 
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                                            clipRule="evenodd" 
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            <p className="text-sm opacity-75">
                                                {interest.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Selected Count */}
                        {selectedInterests.length > 0 && (
                            <div className="text-center mt-6">
                                <p className="text-purple-600 font-medium">
                                    {selectedInterests.length} interest{selectedInterests.length !== 1 ? 's' : ''} selected
                                </p>
                            </div>
                        )}

                        {/* Continue Button */}
                        {selectedInterests.length > 0 && (
                            <div className="text-center mt-8">
                                <button 
                                    onClick={handleContinue}
                                    className="bg-purple-600 hover:bg-purple-700 text-black border-2 font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Take Career Aptitude Quiz
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-6 text-center">
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Grade Selection
                    </button>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Step 2 of 3</p>
                </div>
            </div>
        </div>
    );
};

export default InterestSelectionPage;