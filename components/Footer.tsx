const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3 bg-secondary-400 ">
      <div className="container">
        <div className="flex flex-col gap-4 justify-center light light:text-white">
          <div>Made in Marin County, CA 🌁</div>
          {/* <p className="text-sm">
            We are still growing our dataset! If you see any missing or wrong
            info, please send us the info (with a source to the correction)
            using our contact form. You will be automatically entered to win
            LoungeVault merch!
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
