import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CareerGuidancePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Career recommendations based on interests and quiz performance
    const careerRecommendations = {
        "science-tech": {
            high: [
                { title: "Data Scientist", description: "Analyze complex data to drive business decisions", salary: "₹8-15 LPA", demand: "Very High" },
                { title: "AI/ML Engineer", description: "Develop artificial intelligence and machine learning systems", salary: "₹10-20 LPA", demand: "Extremely High" },
                { title: "Software Developer", description: "Create applications and software solutions", salary: "₹6-12 LPA", demand: "Very High" }
            ],
            medium: [
                { title: "Web Developer", description: "Build and maintain websites and web applications", salary: "₹4-8 LPA", demand: "High" },
                { title: "System Analyst", description: "Analyze and improve computer systems", salary: "₹5-10 LPA", demand: "Medium" },
                { title: "Technical Writer", description: "Create technical documentation and content", salary: "₹4-7 LPA", demand: "Medium" }
            ],
            low: [
                { title: "IT Support Specialist", description: "Provide technical support and troubleshooting", salary: "₹3-6 LPA", demand: "Medium" },
                { title: "Quality Assurance Tester", description: "Test software for bugs and issues", salary: "₹3-6 LPA", demand: "Medium" }
            ]
        },
        "engineering": {
            high: [
                { title: "Software Engineer", description: "Design and develop software systems", salary: "₹8-15 LPA", demand: "Very High" },
                { title: "Mechanical Engineer", description: "Design and manufacture mechanical systems", salary: "₹6-12 LPA", demand: "High" },
                { title: "Civil Engineer", description: "Plan and supervise construction projects", salary: "₹5-10 LPA", demand: "High" }
            ],
            medium: [
                { title: "Electrical Engineer", description: "Design electrical systems and components", salary: "₹5-9 LPA", demand: "Medium" },
                { title: "Chemical Engineer", description: "Develop chemical processes and products", salary: "₹6-11 LPA", demand: "Medium" }
            ],
            low: [
                { title: "Engineering Technician", description: "Support engineers in design and testing", salary: "₹3-6 LPA", demand: "Medium" },
                { title: "CAD Designer", description: "Create technical drawings and designs", salary: "₹4-7 LPA", demand: "Medium" }
            ]
        },
        "medical": {
            high: [
                { title: "Doctor (MBBS)", description: "Diagnose and treat patients", salary: "₹8-20 LPA", demand: "Very High" },
                { title: "Surgeon", description: "Perform surgical procedures", salary: "₹15-30 LPA", demand: "High" },
                { title: "Cardiologist", description: "Specialize in heart-related conditions", salary: "₹20-40 LPA", demand: "High" }
            ],
            medium: [
                { title: "Nurse", description: "Provide patient care and support", salary: "₹3-6 LPA", demand: "Very High" },
                { title: "Pharmacist", description: "Dispense medications and provide drug information", salary: "₹4-8 LPA", demand: "High" }
            ],
            low: [
                { title: "Medical Technician", description: "Assist in medical procedures and tests", salary: "₹2-5 LPA", demand: "Medium" },
                { title: "Healthcare Administrator", description: "Manage healthcare facilities", salary: "₹4-8 LPA", demand: "Medium" }
            ]
        },
        "commerce": {
            high: [
                { title: "Investment Banker", description: "Provide financial advisory services", salary: "₹12-25 LPA", demand: "High" },
                { title: "Management Consultant", description: "Advise organizations on business strategy", salary: "₹10-20 LPA", demand: "High" },
                { title: "Entrepreneur", description: "Start and run your own business", salary: "Variable", demand: "High" }
            ],
            medium: [
                { title: "Financial Analyst", description: "Analyze financial data and trends", salary: "₹6-12 LPA", demand: "High" },
                { title: "Marketing Manager", description: "Develop and execute marketing strategies", salary: "₹6-12 LPA", demand: "High" }
            ],
            low: [
                { title: "Accountant", description: "Manage financial records and transactions", salary: "₹3-8 LPA", demand: "Medium" },
                { title: "Sales Representative", description: "Sell products and services to customers", salary: "₹3-8 LPA", demand: "Medium" }
            ]
        },
        "arts": {
            high: [
                { title: "UX/UI Designer", description: "Design user experiences for digital products", salary: "₹6-15 LPA", demand: "Very High" },
                { title: "Creative Director", description: "Lead creative projects and teams", salary: "₹8-18 LPA", demand: "Medium" },
                { title: "Content Strategist", description: "Develop content strategies for brands", salary: "₹5-12 LPA", demand: "High" }
            ],
            medium: [
                { title: "Graphic Designer", description: "Create visual designs for various media", salary: "₹3-8 LPA", demand: "Medium" },
                { title: "Writer/Author", description: "Create written content and literature", salary: "₹3-10 LPA", demand: "Medium" }
            ],
            low: [
                { title: "Art Teacher", description: "Teach art and creative subjects", salary: "₹3-6 LPA", demand: "Medium" },
                { title: "Museum Curator", description: "Manage museum collections and exhibitions", salary: "₹4-8 LPA", demand: "Low" }
            ]
        },
        "law": {
            high: [
                { title: "Corporate Lawyer", description: "Handle legal matters for corporations", salary: "₹8-25 LPA", demand: "High" },
                { title: "Judge", description: "Preside over legal proceedings", salary: "₹10-20 LPA", demand: "Medium" },
                { title: "Legal Consultant", description: "Provide legal advice to clients", salary: "₹6-15 LPA", demand: "High" }
            ],
            medium: [
                { title: "Public Prosecutor", description: "Represent the state in criminal cases", salary: "₹5-12 LPA", demand: "Medium" },
                { title: "Legal Analyst", description: "Research and analyze legal issues", salary: "₹4-9 LPA", demand: "Medium" }
            ],
            low: [
                { title: "Paralegal", description: "Assist lawyers with legal work", salary: "₹3-6 LPA", demand: "Medium" },
                { title: "Court Reporter", description: "Record legal proceedings", salary: "₹3-7 LPA", demand: "Low" }
            ]
        },
        "design": {
            high: [
                { title: "UX Designer", description: "Design user experiences for digital products", salary: "₹6-15 LPA", demand: "Very High" },
                { title: "Product Designer", description: "Design physical and digital products", salary: "₹7-16 LPA", demand: "High" },
                { title: "Design Director", description: "Lead design teams and strategy", salary: "₹12-25 LPA", demand: "Medium" }
            ],
            medium: [
                { title: "Graphic Designer", description: "Create visual designs for various media", salary: "₹3-8 LPA", demand: "Medium" },
                { title: "Web Designer", description: "Design websites and web interfaces", salary: "₹4-9 LPA", demand: "High" }
            ],
            low: [
                { title: "Interior Designer", description: "Design interior spaces", salary: "₹3-8 LPA", demand: "Medium" },
                { title: "Fashion Designer", description: "Design clothing and accessories", salary: "₹3-10 LPA", demand: "Medium" }
            ]
        },
        "sports": {
            high: [
                { title: "Sports Coach", description: "Train and develop athletes", salary: "₹5-15 LPA", demand: "High" },
                { title: "Sports Medicine Doctor", description: "Treat sports-related injuries", salary: "₹10-20 LPA", demand: "Medium" },
                { title: "Sports Manager", description: "Manage sports teams and events", salary: "₹6-18 LPA", demand: "Medium" }
            ],
            medium: [
                { title: "Physical Therapist", description: "Help patients recover from injuries", salary: "₹4-8 LPA", demand: "High" },
                { title: "Fitness Trainer", description: "Guide people in physical fitness", salary: "₹3-7 LPA", demand: "High" }
            ],
            low: [
                { title: "Sports Equipment Manager", description: "Manage sports equipment and facilities", salary: "₹3-6 LPA", demand: "Medium" },
                { title: "Sports Journalist", description: "Report on sports events and news", salary: "₹3-8 LPA", demand: "Medium" }
            ]
        }
    };

    useEffect(() => {
        // Get data from navigation state or localStorage
        const stateData = location.state;
        const storedProfile = localStorage.getItem('userProfile');
        
        if (stateData) {
            setUserProfile(stateData);
        } else if (storedProfile) {
            const parsed = JSON.parse(storedProfile);
            setUserProfile(parsed);
        }
        
        setLoading(false);
    }, [location.state]);

    const getPerformanceLevel = (score, total) => {
        const percentage = (score / total) * 100;
        if (percentage >= 70) return 'high';
        if (percentage >= 40) return 'medium';
        return 'low';
    };

    const getRecommendationsForUser = () => {
        if (!userProfile || !userProfile.selectedInterests) return [];
        
        const { selectedInterests, quizScore = 0, totalQuestions = 1 } = userProfile;
        const performanceLevel = getPerformanceLevel(quizScore, totalQuestions);
        
        let recommendations = [];
        
        selectedInterests.forEach(interest => {
            if (careerRecommendations[interest] && careerRecommendations[interest][performanceLevel]) {
                recommendations = [...recommendations, ...careerRecommendations[interest][performanceLevel]];
            }
        });
        
        // Remove duplicates
        const uniqueRecommendations = recommendations.filter((rec, index, self) =>
            index === self.findIndex(r => r.title === rec.title)
        );
        
        return uniqueRecommendations.slice(0, 6); // Return top 6 recommendations
    };

    const handleStartOver = () => {
        localStorage.removeItem('userProfile');
        navigate('/getguidance');
    };

    const handleRetakeQuiz = () => {
        navigate('/quiz', {
            state: {
                selectedGrade: userProfile?.selectedGrade,
                selectedInterests: userProfile?.selectedInterests
            }
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Generating your personalized career guidance...</p>
                </div>
            </div>
        );
    }

    if (!userProfile) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No Profile Data Found</h2>
                    <p className="text-gray-600 mb-6">Please complete the interest selection and quiz first.</p>
                    <button
                        onClick={() => navigate("/getguidance")}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg"
                    >
                        Start Career Assessment
                    </button>
                </div>
            </div>
        );
    }

    const recommendations = getRecommendationsForUser();
    const performanceLevel = getPerformanceLevel(userProfile.quizScore || 0, userProfile.totalQuestions || 1);
    const quizPercentage = Math.round(((userProfile.quizScore || 0) / (userProfile.totalQuestions || 1)) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Personalized Career Guidance
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Based on your interests and quiz performance, here are our recommendations for you
                    </p>
                </div>

                {/* Profile Summary */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Grade Level</h3>
                            <p className="text-purple-600 font-medium">{userProfile.selectedGrade}</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Interests</h3>
                            <p className="text-purple-600 font-medium">
                                {userProfile.selectedInterests?.map(interest => 
                                    interest.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase())
                                ).join(', ')}
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quiz Score</h3>
                            <p className="text-purple-600 font-medium">
                                {userProfile.quizScore || 0}/{userProfile.totalQuestions || 0} ({quizPercentage}%)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Performance Analysis */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Performance Analysis</h2>
                    <div className={`p-4 rounded-lg ${
                        performanceLevel === 'high' ? 'bg-green-50 border border-green-200' :
                        performanceLevel === 'medium' ? 'bg-yellow-50 border border-yellow-200' :
                        'bg-red-50 border border-red-200'
                    }`}>
                        <div className="flex items-center mb-2">
                            <span className={`text-2xl mr-3 ${
                                performanceLevel === 'high' ? '🎉' :
                                performanceLevel === 'medium' ? '👍' : '💪'
                            }`}></span>
                            <h3 className={`text-lg font-semibold ${
                                performanceLevel === 'high' ? 'text-green-800' :
                                performanceLevel === 'medium' ? 'text-yellow-800' :
                                'text-red-800'
                            }`}>
                                {performanceLevel === 'high' ? 'Excellent Performance!' :
                                 performanceLevel === 'medium' ? 'Good Performance!' :
                                 'Room for Improvement'}
                            </h3>
                        </div>
                        <p className={`${
                            performanceLevel === 'high' ? 'text-green-700' :
                            performanceLevel === 'medium' ? 'text-yellow-700' :
                            'text-red-700'
                        }`}>
                            {performanceLevel === 'high' ? 
                                'You showed strong aptitude in your areas of interest. You\'re well-suited for challenging roles in your chosen fields.' :
                                performanceLevel === 'medium' ?
                                'You have a good understanding of your interests. With focused learning, you can excel in your chosen career paths.' :
                                'Don\'t worry! Career success comes from passion and persistence. Consider exploring your interests more deeply and retaking the quiz after learning more.'
                            }
                        </p>
                    </div>
                </div>

                {/* Career Recommendations */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Career Paths</h2>
                    
                    {recommendations.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendations.map((career, index) => (
                                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100 hover:shadow-lg transition-shadow duration-200">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{career.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{career.description}</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700">Expected Salary:</span>
                                            <span className="text-sm font-semibold text-green-600">{career.salary}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700">Market Demand:</span>
                                            <span className={`text-sm font-semibold ${
                                                career.demand === 'Very High' || career.demand === 'Extremely High' ? 'text-green-600' :
                                                career.demand === 'High' ? 'text-blue-600' :
                                                career.demand === 'Medium' ? 'text-yellow-600' :
                                                'text-red-600'
                                            }`}>
                                                {career.demand}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-600 mb-4">No specific recommendations available for your selection.</p>
                            <p className="text-sm text-gray-500">Try retaking the quiz or selecting different interests.</p>
                        </div>
                    )}
                </div>

                {/* Next Steps */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Next Steps</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-purple-600">For {userProfile.selectedGrade} Students:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Research entrance exams for your chosen fields
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Consider relevant skill development courses
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Explore internship opportunities
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Connect with professionals in your fields of interest
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-purple-600">Recommended Resources:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Online courses (Coursera, edX, Udemy)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Industry certification programs
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Professional networking platforms (LinkedIn)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    Career counseling sessions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center space-y-4">
                    <div className="space-x-4">
                        <button
                            onClick={handleRetakeQuiz}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Retake Quiz
                        </button>
                        <button
                            onClick={handleStartOver}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Start Over
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">
                        Want to explore different interests or improve your quiz score?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareerGuidancePage;