export const metadata = {
  title: 'Home - PieChat',
  description: 'Piechat helps you connect people with choice'
};

export default function Home() {
  return (
    <div>
      <header className="bg-gradient-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob md:w-96 md:h-96"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 md:w-[30rem] md:h-[30rem]"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 md:w-80 md:h-80"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl">
                Connect with <span className="text-yellow-400">Slice</span> of Life!
              </h1>
              <p className="mt-4 text-lg text-indigo-100 sm:text-xl">
                Experience seamless and fun conversations with PieChat. Stay connected with friends, family, and communities.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                {/* Removed Download Now Button */}
                <a href="#features" className="ml-0 lg:ml-4 text-white hover:text-indigo-200 font-semibold py-3 px-6 rounded-full border border-indigo-300 transition duration-300 ease-in-out">
                  View Features
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <img src="https://yaramoshaver.ir/wp-content/uploads/2022/09/6-1024x614.jpg" alt="Chat Illustration" className="rounded-lg shadow-lg-primary w-full max-w-md lg:max-w-lg"/>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
            Unlock Powerful Communication Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Real-time Messaging</h3>
              <p className="text-gray-500">Experience instant communication with lightning-fast message delivery.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.447.894L15 14M5 18h8a2 2 0 012-2V8a2 2 0 01-2-2H5a2 2 0 01-2 2v8a2 2 0 012 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Multimedia Sharing</h3>
              <p className="text-gray-500">Share photos, videos, and files effortlessly with your contacts.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Group Conversations</h3>
              <p className="text-gray-500">Create and join groups to connect with multiple people at once.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-500">Your conversations are secured with end-to-end encryption for enhanced privacy.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-pink-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-12 0v3.158c.796.346 1.405.955 1.405 1.795L18 17h-2m-2-7l-2 2m0 0l2 2m-2-2h4m-4-4H8m3-1l4 4m0 0l-4 4"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Cross-Platform Support</h3>
              <p className="text-gray-500">Use PieChat on your phone, tablet, or computer seamlessly.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure and Private</h3>
              <p className="text-gray-500">We prioritize your privacy with robust security measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to experience seamless communication?</h2>
          <p className="text-lg mb-8">Download PieChat today and start connecting with your world!</p>
          {/* Removed Download PieChat Button */}
        </div>
      </section>
    </div>
  );
}