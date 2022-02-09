import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Country, State, City } from "country-state-city";
import { Shipping } from "../../types/index";
import { Button } from "../global/index";
import { BsThreeDots } from "react-icons/bs";
import { Plus, X, ArrowDown, ArrowUp } from "react-feather";

const AddCountryDrawer = ({
  setIsAddCountryDrawer,
  shipping,
  setShipping,
}: any) => {
  const countries = Country.getAllCountries();
  const [countryOpen, setCountryOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ countriesCode }: { countriesCode: string[] }) => {
    const countries = countriesCode.map((code) => {
      const country = Country.getCountryByCode(code);
      if (!country) return;

      let cities = City.getCitiesOfCountry(code);
      if (!cities) return;

      return {
        name: country.name,
        code,
        cities: cities.map((city) => city.name),
      };
    });
    const {
      data: { res },
    } = await axios.put("/shipping", { countries });
    setShipping(res);
  };

  return (
    <form
      className="fixed top-0 right-0 z-50 h-screen p-5 flex flex-col space-y-6 bg-white shadow-md"
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full h-20 pt-4 flex items-center justify-between">
        <span className="text-2xl font-bold">Add countries</span>
        <X onClick={() => setIsAddCountryDrawer(false)} />
      </div>
      <div
        className="w-full flex justify-between px-2 text-lg text-gray-400 cursor-pointer"
        onClick={() => setCountryOpen((prv) => !prv)}
      >
        <span>{`Country`}</span>
        {countryOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {countryOpen && (
        <div className="relative w-full">
          <div className="absolute top-0 right-0 w-full max-h-96 overflow-y-scroll flex flex-col space-y-3">
            {countries.map((country, key) => (
              <div className="flex space-x-2" key={key}>
                <input
                  type="checkbox"
                  className="border-2 border-blue-500"
                  value={country.isoCode}
                  defaultChecked={Boolean(
                    shipping.countries
                      .map((country: any) => country.name)
                      .includes(country.name)
                  )}
                  {...register("countriesCode")}
                  key={key}
                />
                <div className="w-full h-12 px-2">{country.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="w-full h-full flex justify-end items-end space-x-6">
        <Button type="submit">{`Save`}</Button>
        <Button color="bg-red-600" onClick={() => setIsAddCountryDrawer(false)}>
          {`Cancel`}
        </Button>
      </div>
    </form>
  );
};

const Index = (props: any) => {
  const [shipping, setShipping] = useState<Shipping>(props.shipping);
  const [isAddCountryDrawer, setIsAddCountryDrawer] = useState(false);

  return (
    <div className="mx-w-6xl felx flex-col space-y-5">
      <div className="w-full p-5 flex flex-col space-y-3">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">{`Countries & regions`}</span>
          <button
            className="p-2 flex justify-center items-center text-sm font-bold text-white bg-blue-500 rounded-full"
            onClick={() => setIsAddCountryDrawer(true)}
          >
            <Plus />
            <span>{`ADD`}</span>
          </button>
        </div>

        <table className="table-auto shadow-xl">
          <thead>
            <tr className="text-sm font-bold text-gray-600 bg-blue-100">
              <th className="w-2/4">{`COUNTRY`}</th>
              <th>{`NO. OF REGIONS`}</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {shipping.countries.map((country, key) => (
              <tr className="text-center h-16 p-2" key={key}>
                <td className="w-2/4">{country.name}</td>
                <td>{country.cities.length}</td>
                <td className="flex justify-center items-center">
                  <BsThreeDots className="text-md cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddCountryDrawer && (
        <AddCountryDrawer
          setIsAddCountryDrawer={setIsAddCountryDrawer}
          shipping={shipping}
          setShipping={setShipping}
        />
      )}
    </div>
  );
};

export default Index;
