import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GradeLevels = [
    { label: "Class 10th", value: "10th" },
    { label: "11th - 12th", value: "11th-12th"},
    { label: "Dropper", value: "dropper" },
    { label: "Undergraduate", value: "undergraduate" },
    { label: "Post Graduate", value: "postgraduate" },
];

const GetGuidencePage = () => {
    const [selectedGrade, setSelectedGrade] = useState("");
    const navigate = useNavigate();

    const handleGradeSelect = (gradeValue) => {
        setSelectedGrade(gradeValue);
        console.log("Selected grade:", gradeValue);
        
        // If 11th-12th is selected, navigate to interests page
        if (gradeValue === "11th-12th") {
            navigate("/interests", { 
                state: { selectedGrade: "11th - 12th" }
            });
        }
        // Add your logic here for other grades
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-8 mt-15">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Find Your Perfect Career Path
                    </h1>
                    
                    {/* Paragraph */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get personalized career guidance, college recommendations, and exam strategies 
                        tailored to your grade level and interests. Start your journey towards success today.
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
                                Select Your Current Grade Level
                            </h2>
                            <p className="text-gray-600">
                                Choose your academic level to get customized guidance
                            </p>
                        </div>

                        {/* Grade Level Buttons - 2 per row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {GradeLevels.map((grade) => (
                                <button
                                    key={grade.value}
                                    onClick={() => handleGradeSelect(grade.value)}
                                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                                        selectedGrade === grade.value
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-200 bg-white/50 text-gray-700 hover:border-blue-300 hover:bg-white/70'
                                    }`}
                                >
                                    <div className="flex items-center justify-center">
                                        <span className="text-lg font-medium">
                                            {grade.label}
                                        </span>
                                        {selectedGrade === grade.value && (
                                            <svg 
                                                className="w-5 h-5 ml-2 text-blue-500" 
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
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        {selectedGrade && selectedGrade !== "11th-12th" && (
                            <div className="text-center mt-8">
                                <button 
                                    onClick={() => {
                                        // Handle navigation for other grades
                                        console.log("Processing guidance for:", selectedGrade);
                                        alert(`Career guidance for ${selectedGrade} is coming soon!`);
                                    }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Get My Career Guidance
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-12 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="p-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">Personalized Guidance</h3>
                            <p className="text-sm text-gray-600">Tailored advice based on your academic level</p>
                        </div>
                        
                        <div className="p-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">College Recommendations</h3>
                            <p className="text-sm text-gray-600">Find the best colleges for your career goals</p>
                        </div>
                        
                        <div className="p-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">Exam Strategies</h3>
                            <p className="text-sm text-gray-600">Proven strategies to excel in your exams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetGuidencePage;