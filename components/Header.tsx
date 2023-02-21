const Header = () => (
  <div className="grid grid-cols-8 gap-3 text-xs font-normal">
    <div>Covered</div>
    <div className="col-span-3">Name</div>
    <div className="text-center">Subscriber</div>
    <div className="col-span-2">Insurance</div>
    <div>ID</div>
  </div>
);

export default Header;
