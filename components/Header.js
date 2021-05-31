import Image from "next/image";


function Header() {
    return (
        <header>
         <div className="p-4 flex">
            <Image 
                className=""
                src="/logo.svg"
                alt="Energy Solution Company Logo"
                width={350}
                height={60}
            />
            <ul className="">
                    <li>portfolio</li>
                    <li>Contact</li>
                    <li>Partners</li>
                    <li>MoreDropDown</li>
                </ul>

         </div>

            
                
            
        </header>
    )
}

export default Header