import Image from "next/image";
// import localImage from '../../assests/next.jpg'
import localImage from '@/assests/next.jpg' // import alias
const GalleryPage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center">Image Optimaization</h1>
            <h1 className="text-4xl text-center">Regular Image</h1>
            <img src="https://t3.ftcdn.net/jpg/00/02/77/90/240_F_2779017_89NtlIoBLDjb80jcU0WtHIoBUr5yqr.jpg" alt="regular"  width={500} height={500}   className="mx-auto"/>

            <h1 className="text-4xl text-center mt-20">Next  Image Component</h1>
            <Image src="https://t3.ftcdn.net/jpg/00/02/77/90/240_F_2779017_89NtlIoBLDjb80jcU0WtHIoBUr5yqr.jpg" width={500} height={500}   alt="nextImage" className="mx-auto"/>

            <h1 className="text-4xl text-center mt-20"> Local Image </h1>
            <Image src={localImage} width={500} height={500}  alt="nextLocalImage"  className="mx-auto"/>
        </div>
    );
};

export default GalleryPage;