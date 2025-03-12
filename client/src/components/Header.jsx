

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
       <h1 className="text-2xl font-bold">Talent<span className="text-rose-700">Spot</span></h1> 
       <ul className="flex gap-5 items-center">
        <li>Home</li>
        <li>Jobs</li>
        <li>Browse</li>
        <li className="bg-stone-400 rounded-sm px-2.5 py-1">Login</li>
        <li className="bg-purple-800 text-white px-2.5 py-1 rounded-sm">Signup</li>
       </ul>
    </nav>
  )
}

export default Header