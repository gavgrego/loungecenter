import { SearchIcon } from "@/components/icons";
import SearchInput from "@/components/searchInput";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2>Find out what lounges you have access to, quick.</h2>
      <div>
        <SearchInput />
      </div>
    </section>
  );
}
