import Image from "next/image";
import image1 from "@/app/images/image1.webp";
import image2 from "@/app/images/image2.jpg"
import image3 from "@/app/images/image3.jpg"
import image4 from "@/app/images/image4.jpg"
import image5 from "@/app/images/image5.webp"
import image6 from "@/app/images/image6.jpeg"
import background from "@/app/images/background.webp"

export default function Body() {
  return (
    <div className="body">
      <div className="cardbox">
        <div className="card">
          <div className="image">
            <Image src={image1} alt="Cheetah"></Image>
          </div>
          <div className="content">
            <h1>Cheetah</h1>
            <p>
              The cheetah (Acinonyx jubatus) is a large cat and the fastest land
              animal. It has a tawny to creamy white or pale buff fur that is
              marked with evenly spaced, solid black spots.
            </p>
            <div>
              <a href="" className="btn1">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <Image src={image2} alt="Lion"></Image>
          </div>
          <div className="content">
            <h1>Lion</h1>
            <p>
            The lion is a large cat species that is primarily found in Africa. Known for being one of the largest cats, second only to the tiger, lions are often referred to as the "king of the beasts".
            </p>
            <div>
              <a href="#" className="btn1">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <Image src={image3} alt="Zebra"></Image>
          </div>
          <div className="content">
            <h1>Zebra</h1>
            <p>
            Zebras are African equines known for their distinctive black-and-white striped coats. There are three living species of zebras: Grévy's zebra, the plains zebra, and the mountain zebra.
            </p>
            <div>
              <a href="#" className="btn1">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="cardbox">
        <div className="card">
          <div className="image">
            <Image src={image4} alt="Giraffe"></Image>
          </div>
          <div className="content">
            <h1>Giraffe</h1>
            <p>
            Giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest animal and the largest ruminant on Earth. Giraffe has the long Neck among all animals.
            </p>
            <div>
              <a href="#" className="btn1">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <Image src={image5} alt="Elephant"></Image>
          </div>
          <div className="content">
            <h1>Elephant</h1>
            <p>
            Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant.
            </p>
            <div>
              <a href="#" className="btn1">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <Image src={image6} alt="Horse"></Image>
          </div>
          <div className="content">
            <h1>Horse</h1>
            <p>
            The horse (Equus ferus caballus) is a domesticated, one-toed, hoofed mammal that belongs to the family Equidae. It is primarily herbivorous and represents a single species
            </p>
            <div>
              <a href="#" className="btn1">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
