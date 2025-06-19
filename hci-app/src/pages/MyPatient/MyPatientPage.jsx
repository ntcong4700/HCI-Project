import {
    Calendar, Hash, User, Venus, Phone, MoreHorizontal, FileText, Building, Clock, Flag, Heart, Download, X, MessageSquare, Star, ChevronRight, Search, Bell, Upload
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function MyPatientPage() {
    const [files, setFiles] = useState([
        { id: 1, name: 'Medical records.pdf' },
        { id: 2, name: 'Insurance.pdf' }
    ]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredFile, setHoveredFile] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleDownload = (fileName) => {
        const link = document.createElement('a');
        link.href = `#`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRemove = (fileId) => {
        setFiles(files.filter(file => file.id !== fileId));
    };

    const handleUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        const newFiles = uploadedFiles.map((file, index) => ({
            id: files.length + index + 1,
            name: file.name
        }));
        setFiles([...files, ...newFiles]);
    };

    return (
        <div className="flex min-h-screen w-full bg-[#f6f8fc]">
            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Dashboard Grid */}
                <main className="flex-1 p-4 md:p-6 lg:p-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Patient Info Card */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-xl group-hover:text-blue-600 transition-colors duration-300">Son Tung MTP</h2>
                                <div className="flex items-center gap-2">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">On treatment</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <Calendar className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">DOB</div>
                                        <div className="font-bold underline group-hover/item:text-blue-600 transition-colors duration-300">15/12/1989</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <Hash className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">ID Number</div>
                                        <div className="font-bold underline group-hover/item:text-blue-600 transition-colors duration-300">12345678</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <User className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Age</div>
                                        <div className="font-bold group-hover/item:text-blue-600 transition-colors duration-300">44</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <Venus className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Gender</div>
                                        <div className="font-bold underline group-hover/item:text-blue-600 transition-colors duration-300">Male</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2 group/item">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Phone</div>
                                    <div className="font-bold underline text-blue-700 group-hover/item:text-blue-800 transition-colors duration-300">+4912345674848</div>
                                </div>
                            </div>
                        </div>

                        {/* Order Details Card */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-xl group-hover:text-blue-600 transition-colors duration-300">Order details</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <FileText className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Prescriber</div>
                                        <div className="font-bold underline text-blue-700 group-hover/item:text-blue-800 transition-colors duration-300">Dr. Johnny Sin</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <Building className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Clinic</div>
                                        <div className="font-bold underline text-blue-700 group-hover/item:text-blue-800 transition-colors duration-300">Darmstadt Clinic</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <Clock className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Start treatment</div>
                                        <div className="font-bold underline group-hover/item:text-blue-600 transition-colors duration-300">01/01/2024</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group/item">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                        <Flag className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">End treatment</div>
                                        <div className="font-bold underline group-hover/item:text-blue-600 transition-colors duration-300">01/06/2024</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2 group/item">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12 group-hover/item:bg-blue-200">
                                    <Heart className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Type of treatment</div>
                                    <div className="font-bold underline text-blue-700 group-hover/item:text-blue-800 transition-colors duration-300">Chemotherapy</div>
                                </div>
                            </div>
                        </div>

                        {/* Treatment Journey Card */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="font-bold text-xl mb-4 underline group-hover:text-blue-600 transition-colors duration-300">Treatment Journey</h2>
                            <div className="flex flex-row items-start">
                                {/* Timeline (line + icons) */}
                                <div className="relative flex flex-col items-center pt-3" style={{width: '56px', minHeight: '320px'}}>
                                    {/* Vertical line */}
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-blue-300 z-0 transition-all duration-300 group-hover:bg-blue-400" style={{borderRadius: '2px'}} />
                                    {/* Icon 1 */}
                                    <div className="flex-1 flex items-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-blue-200">
                                            <Calendar className="h-7 w-7 text-blue-600" />
                                        </div>
                                    </div>
                                    {/* Arrow 1 */}
                                    <div className="z-20 my-0.5">
                                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0V20" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4"/>
                                            <path d="M2 16L6 20L10 16" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    {/* Icon 2 */}
                                    <div className="flex-1 flex items-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-blue-200">
                                            <Clock className="h-7 w-7 text-blue-600" />
                                        </div>
                                    </div>
                                    {/* Arrow 2 */}
                                    <div className="z-20 my-0.5">
                                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0V20" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4"/>
                                            <path d="M2 16L6 20L10 16" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    {/* Icon 3 */}
                                    <div className="flex-1 flex items-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-blue-200">
                                            <Flag className="h-7 w-7 text-blue-600" />
                                        </div>
                                    </div>
                                </div>
                                {/* Content boxes */}
                                <div className="flex flex-col gap-6 ml-4 flex-1">
                                    <div className="flex flex-row items-center min-h-[80px]">
                                        <div className="rounded-xl bg-blue-50 p-6 w-full transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02]">
                                            <div className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">Prescription Submitted:</div>
                                            <div className="font-bold underline text-lg group-hover:text-blue-700 transition-colors duration-300">01/06/2024</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center min-h-[80px]">
                                        <div className="rounded-xl bg-blue-50 p-6 w-full transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02]">
                                            <div className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">Treatment Start:</div>
                                            <div className="font-bold underline text-lg group-hover:text-blue-700 transition-colors duration-300">14/06/2024</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center min-h-[80px]">
                                        <div className="rounded-xl bg-blue-50 p-6 w-full transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02]">
                                            <div className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">Treatment End:</div>
                                            <div className="font-bold underline text-lg group-hover:text-blue-700 transition-colors duration-300">11/02/2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Uploaded Files Card */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-xl group-hover:text-blue-600 transition-colors duration-300">Uploaded files</h2>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleUpload}
                                        className="hidden"
                                        multiple
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        <Upload className="h-5 w-5" />
                                        <span>Upload Files</span>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {files.map(file => (
                                    <div 
                                        key={file.id} 
                                        className={`flex items-center justify-between rounded-lg bg-blue-50 p-3 transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02] ${
                                            hoveredFile === file.id ? 'bg-blue-100 shadow-lg scale-[1.02]' : ''
                                        }`}
                                        onMouseEnter={() => setHoveredFile(file.id)}
                                        onMouseLeave={() => setHoveredFile(null)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                                <FileText className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <a href="#" className="font-medium text-blue-600 underline hover:text-blue-800 transition-colors duration-300">{file.name}</a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
                                                onClick={() => handleDownload(file.name)}
                                            >
                                                <Download className="h-5 w-5" />
                                            </button>
                                            <button 
                                                className="text-gray-500 hover:text-red-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
                                                onClick={() => handleRemove(file.id)}
                                            >
                                                <X className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
