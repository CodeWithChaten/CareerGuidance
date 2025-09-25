import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Quiz questions based on different interests
const quizQuestions = {
    "science-tech": [
        {
            id: 1,
            question: "Which programming language would you prefer to learn first?",
            options: ["Python", "JavaScript", "C++", "Java"],
            correctAnswer: 0,
            explanation: "Python is beginner-friendly and widely used in data science and AI."
        },
        {
            id: 2,
            question: "What interests you most about technology?",
            options: ["Artificial Intelligence", "Web Development", "Mobile Apps", "Data Analysis"],
            correctAnswer: 0,
            explanation: "All are great fields, but AI has tremendous growth potential."
        },
        {
            id: 3,
            question: "Which scientific field excites you most?",
            options: ["Physics", "Chemistry", "Biology", "Computer Science"],
            correctAnswer: 3,
            explanation: "Computer Science combines logic, creativity, and has excellent career prospects."
        }
    ],
    "engineering": [
        {
            id: 1,
            question: "Which type of engineering interests you most?",
            options: ["Software Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering"],
            correctAnswer: 0,
            explanation: "Software engineering has high demand and flexibility in career options."
        },
        {
            id: 2,
            question: "What would you like to build?",
            options: ["Mobile Apps", "Bridges", "Robots", "Power Systems"],
            correctAnswer: 0,
            explanation: "Mobile app development is in high demand and offers creative freedom."
        },
        {
            id: 3,
            question: "Which skill is most important for an engineer?",
            options: ["Problem Solving", "Math Skills", "Communication", "Technical Knowledge"],
            correctAnswer: 0,
            explanation: "Problem-solving is the core skill that drives all engineering solutions."
        }
    ],
    "medical": [
        {
            id: 1,
            question: "What motivates you most about healthcare?",
            options: ["Helping patients", "Medical research", "Emergency care", "Preventive medicine"],
            correctAnswer: 0,
            explanation: "Patient care is the heart of medical profession and provides deep satisfaction."
        },
        {
            id: 2,
            question: "Which medical field interests you?",
            options: ["General Medicine", "Surgery", "Pediatrics", "Cardiology"],
            correctAnswer: 0,
            explanation: "General medicine provides broad knowledge and flexibility in specialization."
        },
        {
            id: 3,
            question: "How do you handle high-pressure situations?",
            options: ["Stay calm and focused", "Get nervous but manage", "Seek help from others", "Avoid them"],
            correctAnswer: 0,
            explanation: "Medical field requires composure under pressure for patient safety."
        }
    ],
    "commerce": [
        {
            id: 1,
            question: "What aspect of business interests you most?",
            options: ["Finance & Investment", "Marketing & Sales", "Operations Management", "Entrepreneurship"],
            correctAnswer: 3,
            explanation: "Entrepreneurship combines all business aspects and offers unlimited potential."
        },
        {
            id: 2,
            question: "Which business skill do you want to develop?",
            options: ["Leadership", "Financial Analysis", "Digital Marketing", "Strategic Planning"],
            correctAnswer: 0,
            explanation: "Leadership skills are valuable across all business domains."
        },
        {
            id: 3,
            question: "Your ideal work environment would be?",
            options: ["Corporate office", "Startup atmosphere", "Remote work", "Client meetings"],
            correctAnswer: 1,
            explanation: "Startups offer rapid learning and growth opportunities."
        }
    ],
    "arts": [
        {
            id: 1,
            question: "Which creative field appeals to you most?",
            options: ["Digital Art", "Literature", "Psychology", "History"],
            correctAnswer: 0,
            explanation: "Digital art combines creativity with technology, offering modern career opportunities."
        },
        {
            id: 2,
            question: "How do you express creativity best?",
            options: ["Visual design", "Writing", "Performance", "Teaching"],
            correctAnswer: 0,
            explanation: "Visual design has wide applications in digital media and marketing."
        },
        {
            id: 3,
            question: "What's most important in creative work?",
            options: ["Originality", "Technical skill", "Market appeal", "Personal expression"],
            correctAnswer: 0,
            explanation: "Originality sets creative work apart and builds unique value."
        }
    ],
    "law": [
        {
            id: 1,
            question: "Which area of law interests you most?",
            options: ["Corporate Law", "Criminal Law", "Family Law", "Environmental Law"],
            correctAnswer: 0,
            explanation: "Corporate law offers high earning potential and diverse opportunities."
        },
        {
            id: 2,
            question: "What motivates you about legal work?",
            options: ["Justice & fairness", "Intellectual challenge", "Financial rewards", "Social impact"],
            correctAnswer: 0,
            explanation: "Justice is the foundation of legal profession and provides meaningful purpose."
        },
        {
            id: 3,
            question: "Your strongest skill for law would be?",
            options: ["Analytical thinking", "Public speaking", "Research", "Negotiation"],
            correctAnswer: 0,
            explanation: "Analytical thinking is essential for understanding complex legal issues."
        }
    ],
    "design": [
        {
            id: 1,
            question: "Which design field excites you most?",
            options: ["UI/UX Design", "Graphic Design", "Fashion Design", "Architecture"],
            correctAnswer: 0,
            explanation: "UI/UX design is in high demand with the growth of digital products."
        },
        {
            id: 2,
            question: "What's your design inspiration?",
            options: ["User needs", "Aesthetic beauty", "Innovation", "Cultural trends"],
            correctAnswer: 0,
            explanation: "User-centered design creates products that truly solve problems."
        },
        {
            id: 3,
            question: "Which design tool would you like to master?",
            options: ["Figma", "Photoshop", "AutoCAD", "Sketch"],
            correctAnswer: 0,
            explanation: "Figma is the industry standard for modern UI/UX design collaboration."
        }
    ],
    "sports": [
        {
            id: 1,
            question: "Which sports career interests you most?",
            options: ["Sports Coaching", "Sports Medicine", "Sports Management", "Professional Athlete"],
            correctAnswer: 0,
            explanation: "Sports coaching offers long-term career stability and impact on others."
        },
        {
            id: 2,
            question: "What's most important in sports?",
            options: ["Teamwork", "Individual excellence", "Strategy", "Physical fitness"],
            correctAnswer: 0,
            explanation: "Teamwork skills are valuable both in sports and other career paths."
        },
        {
            id: 3,
            question: "How do you handle competition?",
            options: ["Motivates me", "Causes stress", "I avoid it", "I learn from it"],
            correctAnswer: 0,
            explanation: "Embracing competition builds resilience and drive for success."
        }
    ]
};

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestions, setCurrentQuestions] = useState([]);
    
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get user interests and grade from previous pages
    const { selectedInterests = [], selectedGrade = "11th-12th" } = location.state || {};

    useEffect(() => {
        // Generate quiz questions based on selected interests
        if (selectedInterests.length > 0) {
            let allQuestions = [];
            selectedInterests.forEach(interest => {
                if (quizQuestions[interest]) {
                    allQuestions = [...allQuestions, ...quizQuestions[interest]];
                }
            });
            
            // Shuffle questions and take maximum 10 questions
            const shuffled = allQuestions.sort(() => 0.5 - Math.random());
            setCurrentQuestions(shuffled.slice(0, Math.min(10, shuffled.length)));
        }
    }, [selectedInterests]);

    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestionIndex]: answerIndex
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowResult(false);
        } else {
            // Calculate final score
            let finalScore = 0;
            currentQuestions.forEach((question, index) => {
                if (selectedAnswers[index] === question.correctAnswer) {
                    finalScore++;
                }
            });
            setScore(finalScore);
            setQuizCompleted(true);
        }
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResult(false);
        setQuizCompleted(false);
        setScore(0);
    };

    const handleGetCareerGuidance = () => {
        // Navigate to career guidance with quiz results
        navigate("/career-guidance", {
            state: {
                selectedGrade,
                selectedInterests,
                quizScore: score,
                totalQuestions: currentQuestions.length,
                quizAnswers: selectedAnswers
            }
        });
    };

    if (selectedInterests.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No Interests Selected</h2>
                    <p className="text-gray-600 mb-6">Please go back and select your interests first.</p>
                    <button
                        onClick={() => navigate("/interests")}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg"
                    >
                        Back to Interest Selection
                    </button>
                </div>
            </div>
        );
    }

    if (currentQuestions.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your personalized quiz...</p>
                </div>
            </div>
        );
    }

    if (quizCompleted) {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
                        <div className="text-6xl mb-4">🎉</div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
                        <div className="text-6xl font-bold text-purple-600 mb-2">{percentage}%</div>
                        <p className="text-lg text-gray-600 mb-6">
                            You scored {score} out of {currentQuestions.length} questions correctly!
                        </p>
                        
                        <div className="space-y-4">
                            <button
                                onClick={handleGetCareerGuidance}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                Get Your Personalized Career Guidance
                            </button>
                            <button
                                onClick={handleRestartQuiz}
                                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                Retake Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Career Aptitude Quiz
                    </h1>
                    <p className="text-lg text-gray-600">
                        Based on your interests: {selectedInterests.map(interest => 
                            quizQuestions[interest] ? interest.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase()) : interest
                        ).join(', ')}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Question {currentQuestionIndex + 1} of {currentQuestions.length}</span>
                        <span>{Math.round(((currentQuestionIndex + 1) / currentQuestions.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question Card */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                        {currentQuestion.question}
                    </h2>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                                    selectedAnswers[currentQuestionIndex] === index
                                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                                        : 'border-gray-200 bg-white/50 hover:border-purple-300 hover:bg-white/70'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                                        selectedAnswers[currentQuestionIndex] === index
                                            ? 'border-purple-500 bg-purple-500'
                                            : 'border-gray-300'
                                    }`}>
                                        {selectedAnswers[currentQuestionIndex] === index && (
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                        )}
                                    </div>
                                    <span className="text-gray-700">{option}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Show explanation after answering */}
                    {showResult && (
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start">
                                <div className="text-blue-500 mr-2">💡</div>
                                <div>
                                    <h4 className="font-semibold text-blue-800 mb-1">Explanation:</h4>
                                    <p className="text-blue-700 text-sm">
                                        {currentQuestion.explanation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={() => navigate("/interests")}
                        className="flex items-center text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Interests
                    </button>

                    <div className="space-x-3">
                        {isAnswered && !showResult && (
                            <button
                                onClick={handleShowResult}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                            >
                                Show Explanation
                            </button>
                        )}
                        
                        {(showResult || !isAnswered) && (
                            <button
                                onClick={handleNextQuestion}
                                disabled={!isAnswered}
                                className={`font-medium py-2 px-6 rounded-lg transition-colors duration-200 ${
                                    isAnswered
                                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                {currentQuestionIndex === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>
                        )}
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Step 3 of 3</p>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;