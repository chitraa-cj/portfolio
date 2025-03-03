import { Image } from "antd";
import { Timeline } from "./timeline";


export function TimelineDemo() {
  const data = [
    {
      title: "RapidPlate: Automatic License Plate Detection",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built a YOLO-based license plate detection model, optimizing training pipelines and achieving an mAP of 0.7.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/Number-Plate-Detection.png" alt="RapidPlate" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="/images.png" alt="Stock Monitoring" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
          <a href="https://github.com/RapidPlate" className="text-blue-500">GitHub Repository</a>
        </div>
      ),
    },
    {
      title: "Stock Price Monitoring",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed a stock prediction model using XGBoost with 98.41% accuracy.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/timeseries.png" alt="RapidPlate" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="/time_series.webp" alt="Stock Monitoring" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },
    {
      title: "Blogs Publishing Website",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Created a Medium-style blogging platform using React, NodeJS, and Prisma for authentication.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/medley-presentation.png" alt="RapidPlate" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="/1-medium.png" alt="Stock Monitoring" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
          <a href="https://github.com/Medium-app" className="text-blue-500">GitHub Repository</a>
        </div>
      ),
    },
    {
      title: "Transformer Architecture from Scratch",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implemented a transformer model from scratch, experimenting with attention mechanisms and tokenization.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/transformers.png" alt="RapidPlate" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="/biology-12-01033-g001.png" alt="Stock Monitoring" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },
    {
      title: "LLM-based Healthcare Chatbot",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built an LLM-driven chatbot for healthcare with RAG, contextual query processing, and chain of thought reasoning.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/chatgpt-prompts.svg" alt="RapidPlate" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="/system framework.png" alt="Stock Monitoring" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
