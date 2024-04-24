import { paragraphIS, paragraphIS2, paragraphCloud, paragraphCloud2, paragraphCloud3, paragraphCloud4 } from "../constants";

function Solutions () {
    return (
        <div className="relative bg-gradient-to-b from-g2 to-g3">
            <div className="w-full p-10">
                <div id="article" className='flex flex-col space-y-32'>
                    <div className="text-black space-y-10">
                        <h1 className="text-6xl pb-10 text-center">What Can Be Done</h1>
                        <section>
                            <div id="text-container" className="space-y-4">
                                <h2 className="text-4xl">Immediate Relief</h2>
                                <div id="para" className="text-2xl space-y-3">
                                    <p>{paragraphIS}</p>
                                    <p>{paragraphIS2}</p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div id="text-container"  className="space-y-4">
                                <h2 className="text-4xl">Cloud Seeding and Artificial Intelligence</h2>
                                <div id="para" className="text-2xl space-y-3">
                                    <p>{paragraphCloud}</p>
                                    <p>{paragraphCloud2}</p>
                                    <p>{paragraphCloud3}</p>
                                    <p>{paragraphCloud4}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions;