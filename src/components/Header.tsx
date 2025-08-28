const Header = () => {
    return (
        <div className="bg-white shadow-sm border-b">
            <div className="containter mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Personal Book Library</h1>
                        <p className="text-sm text-gray-600">Manage your reading collection</p>
                    </div>
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">{Math.floor(Math.random() * 9) + 1}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header