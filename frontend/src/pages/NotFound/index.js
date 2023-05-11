const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-bold">Page Not Found</h2>
            <p className="text-xl">Sorry, this page does not exist</p>
            <a href="/" className="text-blue-500 hover:underline">Go back to the homepage</a>
        </div>
    )
}

export default NotFound