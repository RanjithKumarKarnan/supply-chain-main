import React from 'react'

const UnboxHero = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left: Box Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/box.jpg"
            alt="Branded Box"
            className="w-full max-w-xl object-contain"
          />
        </div>

        {/* Right: Text Box */}
        <div className="flex-1 bg-white shadow-xl rounded-xl px-8 py-10 max-w-md">
          <h1 className="text-4xl font-bold leading-tight">
            <span className="text-pink-600">Open up</span> <br />
            <span className="text-gray-900">to a new</span> <br />
            <span className="text-gray-900">experience.</span>
          </h1>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Create, package and ship fully custom branded boxes. Show your employees and customers some love!
          </p>
          <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-md text-sm shadow-md transition-all">
            Let’s Go!
          </button>
        </div>
      </div>
    </section>
  )
}

export default UnboxHero
