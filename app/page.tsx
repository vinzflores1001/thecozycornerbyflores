import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 font-sans">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Welcome to <span className="text-amber-600">The Cozy Corner</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          A cozy online bookstore with hand-picked recommendations for readers who love stories that warm the soul.
        </p>
        <div className="flex justify-center">
          <Image
            src="/bookshelf.png" // ✅ .png
            alt="A wooden bookshelf filled with classic and modern books in soft warm lighting"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </header>

      {/* Featured Books Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Reads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "The Quiet Bookstore",
              author: "Elena Rivers",
              img: "/book1.png", // ✅ .png
              alt: "Cover of 'The Quiet Bookstore' showing a rainy street with a small lit bookstore",
            },
            {
              title: "Letters to My Future Self",
              author: "Marcus Lee",
              img: "/book2.png", // ✅ .png
              alt: "Cover of 'Letters to My Future Self' featuring handwritten letters on a wooden desk",
            },
            {
              title: "Midnight Tea & Mysteries",
              author: "Priya Sharma",
              img: "/book3.png", // ✅ .png
              alt: "Cover of 'Midnight Tea & Mysteries' with a teacup, candle, and old detective novel",
            },
          ].map((book, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-5 flex flex-col items-center text-center"
            >
              <Image
                src={book.img}
                alt={book.alt}
                width={150}
                height={220}
                className="mb-4 rounded"
              />
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Call to Action */}
      <footer className="py-10 px-6 text-center text-zinc-600 dark:text-zinc-400 text-sm">
        <p>Curated with care by Vinz Daniel S. Flores</p>
      </footer>
    </div>
  );
}