function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-amber-400 py-3 px-6 rounded-t-xl text-center text-white text-sm mt-10">
      © {year} Developed by{" "}
      <a
        href="https://www.linkedin.com/in/lakshya-singhal/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        Lakshya Singhal 
      </a>
      {" "} & Samarth Garg
    </footer>
  );
}

export default Footer;
