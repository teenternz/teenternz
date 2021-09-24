import Link from 'next/link';
import Blog_Subsection from '../../../components/blog-subsection'
import Time_Ago from '../../../components/other/time-ago'

const Mental_Health = () => {
  return (
    <>
      <h1 className="text-2xl font-medium md:ml-36 sm:ml-16 ml-8 my-8 ">Mental Health</h1>
    <div className="grid grid-cols-3">
    <div className="sm:col-span-2 divide-y-2 col-span-3">

        <div className="flex flex-1 m-8 justify-center">
        <div className="text-2xl font-semibold p-6 sm:w-2/3 w-full">
            <p><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>How to deal with stress and Anxiety as a student</a></Link></p>
            <p className="text-base font-light text-gray-800 mt-3"><Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>Anything that your mind says has an identical response to the body cells. That’s why stress is the response your body gives physically or mentally...</a></Link></p>
            <p className="text-sm font-normal text-gray-800 mt-3"><Time_Ago date="August 13, 2021"/></p>
        </div>
        <div className="hidden sm:block">
        <Link href="/blogs/how-to-deal-with-stress-and-still-enjoy-our-highschool-life"><a>
          <img className="h-32 w-48 m-6 rounded-lg" src="/blogs/pexels-anna-shvets-4226215.jpg" alt="" />
          </a></Link>
        </div>
        </div>

        
    </div>
    <div>

      <Blog_Subsection  />
      
    </div>
    </div>
    </>
  )
}

export default Mental_Health
