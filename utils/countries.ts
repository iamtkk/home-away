import countries from "world-countries";

const getFlagEmoji = (countryCode: any) => {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char: any) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
};

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag,
    // flag: getFlagEmoji(item.cca2),
    location: item.latlng,
    region: item.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
