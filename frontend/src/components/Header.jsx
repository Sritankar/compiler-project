const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-4 mt-4 w-4/5 py-2">
      <div className="flex gap-8 justify-center items-center">

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmXQaT_SlT1Rr6GrsQHH5SRlSUqZqS69R0A&usqp=CAU"
        alt="logo"
        className="w-1/6"
        />
      <h1 className="font-primary text-6xl font-bold">
        Compiles
      </h1>
        </div>
    </header>
  );
};

export default Header;
