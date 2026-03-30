import {
    CloudRain,
    TrendingDown,
    Sprout,
    Plane,
    AlertTriangle,
    Map as MapIcon,
    CheckCircle2
} from 'lucide-react';

const Infographic = () => {
    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex justify-center font-sans text-slate-800">
            {/* Main Page Container - aspect ratio similar to Letter paper */}
            <div className="bg-white w-full max-w-[1000px] shadow-2xl overflow-hidden flex flex-col relative">

                {/* HEADER SECTION */}
                <header className="bg-slate-900 text-white p-6 border-b-4 border-amber-500">
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-1">
                                Capstone Project Executive Brief
                            </h2>
                            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                                Defeating "Zombie Forests"
                            </h1>
                            <p className="text-xl text-slate-300 mt-1 font-light">
                                Landscape-Scale Resilience via Aerial Microbial Inoculation
                            </p>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-xs text-slate-400">Prepared For</div>
                            <div className="font-bold text-lg">USDA Forest Service</div>
                            <div className="text-xs text-slate-400 mt-1">IRA / Adaptation Strategy</div>
                        </div>
                    </div>
                </header>

                {/* MAIN GRID */}
                <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* TOP ROW: MAP (8 cols) & PIVOT (4 cols) */}

                    {/* MAP CONTAINER */}
                    <div className="md:col-span-8 bg-slate-100 rounded-xl flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group shadow-inner border border-slate-200">
                        {/* INSTRUCTIONS: 
                  1. Upload your map image to an image host or place it in your project folder.
                  2. Replace the 'src' string below with your image URL/path.
              */}
                        <img
                            src="/map.png"
                            alt="USFS Tree Mortality Map showing recruitment failure zones"
                            className="w-full h-full object-cover absolute inset-0"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none'; // Hide broken image icon
                                ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'flex'; // Show fallback text
                            }}
                        />

                        {/* Fallback display if image is missing */}
                        <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center z-0">
                            <MapIcon className="w-12 h-12 mb-2 opacity-50" />
                            <p className="font-bold text-sm">Map Image Placeholder</p>
                            <p className="text-xs">Paste your map URL into the code src=""</p>
                        </div>

                        {/* Overlay Legend */}
                        <div className="absolute bottom-4 right-4 bg-white/95 p-2 text-[10px] rounded shadow-md border border-slate-200 backdrop-blur-sm z-20">
                            <div className="font-bold text-slate-800 mb-1 border-b border-slate-200 pb-1 uppercase tracking-wider">Suitability Analysis</div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-slate-600">USFS Mortality Zones</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full border border-green-600"></div>
                                <span className="text-slate-600">Aerial Target Zone</span>
                            </div>
                        </div>
                    </div>

                    {/* STRATEGIC PIVOT */}
                    <div className="md:col-span-4 flex flex-col justify-center bg-slate-800 text-white p-6 rounded-xl shadow-md">
                        <h3 className="font-bold text-amber-400 uppercase text-xs mb-3 tracking-wider">The Strategic Pivot</h3>
                        <p className="text-base font-light leading-relaxed">
                            Manual arboriculture is too slow for the climate crisis. We must pivot to <strong className="text-amber-100">Landscape Ecological Engineering</strong>.
                        </p>
                        <div className="mt-4 border-t border-slate-700 pt-3">
                            <p className="text-xs text-slate-400">
                                This approach utilizes autonomous systems to restore soil microbiome function at scales impossible for human crews.
                            </p>
                        </div>
                    </div>


                    {/* BOTTOM ROW: PROBLEM (6 cols) & SOLUTION (6 cols) */}

                    {/* LEFT COLUMN: THE PROBLEM */}
                    <div className="md:col-span-6 flex flex-col gap-6">
                        <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-500 shadow-sm h-full">
                            <div className="flex items-center gap-2 mb-3">
                                <AlertTriangle className="text-red-600 w-6 h-6" />
                                <h3 className="text-lg font-bold text-red-900 uppercase">The Hidden Risk</h3>
                            </div>

                            <div className="mb-4">
                                <h4 className="font-bold text-slate-900 text-lg leading-tight">
                                    The "Zombie Forest" Phenomenon
                                </h4>
                                <p className="text-sm text-slate-700 mt-2">
                                    High NDVI (greenness) creates a <strong>false sense of security</strong>. Mature trees persist, but recruitment has failed completely due to soil microbiome collapse.
                                </p>
                            </div>

                            <div className="bg-white p-3 rounded-lg border border-red-100 mb-4">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-slate-500">Canopy Health</span>
                                    <span className="text-xs font-bold text-green-600">High (Illusion)</span>
                                </div>
                                <div className="w-full bg-slate-200 h-2 rounded-full mb-3">
                                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                                </div>

                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold text-slate-500">Root Recruitment</span>
                                    <span className="text-xs font-bold text-red-600">CRITICAL FAILURE</span>
                                </div>
                                <div className="w-full bg-slate-200 h-2 rounded-full">
                                    <div className="bg-red-500 h-2 rounded-full w-[5%]"></div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 text-sm text-slate-700">
                                <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                <p><strong>Driver:</strong> "Hotter Drought" & Extreme Vapor Pressure Deficit (VPD) sterilize the topsoil.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: THE SOLUTION */}
                    <div className="md:col-span-6 flex flex-col gap-4">
                        <div className="bg-blue-50 p-4 rounded-xl border-t-4 border-blue-500 h-full">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                                <h3 className="text-sm font-bold text-blue-900 uppercase">The Protocol</h3>
                            </div>

                            {/* Step 1 */}
                            <div className="mb-4 relative pl-4 border-l-2 border-blue-200">
                                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                                    <Plane className="w-4 h-4 text-slate-500" />
                                    Aerial Delivery
                                </h4>
                                <p className="text-xs text-slate-600 mt-1">
                                    Drone swarms deploy <strong>Fungal Recruitment Pellets (FRPs)</strong> to access rugged terrain.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-4 relative pl-4 border-l-2 border-blue-200">
                                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                                    <CloudRain className="w-4 h-4 text-slate-500" />
                                    Hydro-Timing
                                </h4>
                                <p className="text-xs text-slate-600 mt-1">
                                    <strong>Critical Insight:</strong> Deployment must synchronize with atmospheric data (12-24hr pre-rain window) for survival.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pl-4 border-l-2 border-blue-200">
                                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                                    <Sprout className="w-4 h-4 text-slate-500" />
                                    Result
                                </h4>
                                <p className="text-xs text-slate-600 mt-1">
                                    Restored soil biome enables seedling establishment and carbon permanence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: THE BOTTOM LINE */}
                <div className="p-6 bg-slate-50 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">The Bottom Line</h3>
                            <p className="text-slate-600 text-sm md:text-base">
                                Managing for current conditions guarantees failure. This project represents a scalable, geospatial investment in <strong>future adaptability</strong> to prevent catastrophic carbon reversal liability.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-center">
                                <div className="text-xs uppercase opacity-90">Estimated ROI</div>
                                <div className="text-lg">Carbon Permanence</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="bg-slate-900 text-slate-500 text-[10px] p-2 text-center uppercase tracking-widest">
                    ENSC 511 Capstone Project  |  Belowground Resilience  |  Confidential Brief
                </div>

            </div>
        </div>
    );
};

export default Infographic;
