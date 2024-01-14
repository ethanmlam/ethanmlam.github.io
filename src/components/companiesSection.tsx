import React from "react";
import { Box, Heading, Grid, HStack } from "@chakra-ui/react";
import CompanyCard from "./companyCard"; // Make sure to import CompanyCard component

const utopicDescription = [
  "Use-To-Earn Blockchain Social Media Platform",
  "Summer 2023: Software Engineering Intern",
  "Website and NFT Program",
];

const roverxDescription = [
  "NFT Trading and Blockchain Analytics App",
  "Summer 2023: Product Management Intern",
  "Payments Case-Study",
  
];

const avalancheDescription = [
  "LLM Training Optimization",
  "Summer 2022: Product Management Intern",
];

const evitadoDescription = [
  "AI Collision Sensing Tech for Aircraft",
  "Summer 2022: Operations Research Intern",
];
const companies = [
  {
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABDCAYAAAA1Wi+TAAAKMWlDQ1BJQ0MgcHJvZmlsZQAASImdlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+3EBhusAAAAGYktHRADmAN4Ay9V2igIAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmBBoDEDs/YgYoAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAADQFJREFUeNrtnX9MG+cZxx8nbmRUp7lL5damhRyGoal0cBS6Sa1pzR+UqGoJNKjVpEw2mjJFSjTw/mgqRRmgLdP6l41WtIRKw56mramShQWpokWbXUGntUrChTZNyw9zgRZMk3JnMLH5Ve8P7pTL9c73nm1SJ3m/0kmJuXvvsd/P+9zzPs97dwBYWFhYWFhYWFhYWFhY960MP9SJTY+SlMlKUgAA67E4n5jn2PVYgsddgnVXAG00mwhb/dNui6Ns386SfNpoNhHyfWITswzHTIamzw53JSIci7sHK+eANllJqnC/o9W292m3EsRqmhu44A8HBjsx2Fg5AbTRbCIK9te0FjbXtOkBWapEhGPD/sHOufcv+HFXYaFo+1Y0ai7Jp6u8h4IWR1njth1GU/qDIo+wOMoaAQD4y+EPcXdh3XGgbfVVrp/89sA7O3bvtGarTZIudmKose440HZXXXvpkQZfJl4ZQ42VE0Bbni1r/PFvXjm5lcaSdLEzMb/AxibmLuOuw1LStmw0YrKSVOmRBu+dMLj0cINPzF9jYW0J0HZXXbseyNZicZ5jwiGOCYfWYnFdxRSjOY944uirvbjrsBT5yIZ3tu2tdqPsG48ssFfffLeFY8Ih6ecFzY62Ildd+wPmPKT0HkkXOwna7uRl7WBhZeyhC/bXtKHstzQxy3xy0FfJKUA4c2bY98lBX2VcRxGl7Ohr2EtjZR9oki5+HsUzjx4PNKVaq5GIcOwlz8laVKhNVpIqctV14C7EyhrQRnMesbPERmvtxzPhEEoJOxHh2NHjgSbU8xc2O1rTrUJiYaAVvCSBNBG8/tGVf6G2GZuYZab8g52oA8rueqEddyNWVoB+4EG0SRxqJsNkJSmLo6xx+uywDzX0KGh2tBG03Ym7EisrMTSK8h7drenJxfUfmym5JIx3n/egtm931WEvjZU50PF5NC+qFWebrCRV5T0UNFlJSgwjrg9f6eMQ03JiGg93J1ZGQKPeYWJxPLkv1d+rvIeC0smdGEZMBT7oRLUFe2msLAAd51GyFyYrSal5UFt9tVupymh31bVzTDg0c2a4C9VLm6zkHtylGOiM9M0wWgZDzYPa3cqfk3Sx0+IoawwHBjtQJ5VkRXEt7lIMdEa68dFnfenGueYSG51qDUjp4QYvQBK+QvTSOCed86IBwC3ZnDkHtJ4FRvJytVb2w2QlqYL9NW3hwGBHPHfvLQzKNreOY92yY8+p7OeUbXfrwG0EgF7J1p5zQAMAsgfdBNTRdsujauexC5sdrSYrSV1983SL1r6J+R8EejlslI5jKdmxtMo+8kFDA9bWAT19dtiH6qXt7rp2PaGB0ZxHlB5+2SsuN02179LELIO7FAOdsdZjcR49zs0jxBV6S5NfIwFocTzZSNB25+cpvPTSxCyDH3mQ8+IBgJVsfM4BbbKSlK2+2q2nXF3Y7GgFAEhEeBbZs7vq2hMRjlVb5zFzdqgL85Lz8gFAkWRryimgzSX59M/e9oyUHnnZC5AE1EKI0ZxHmEts9Hoszs8NXAygZkkK9jvalMKbuYEL/rmBi37MC1baQIvlaqPZRIjl6rmBi37UcvXO4sdowbP6UM+5mbNOwlTglpeORxbYcGCw8x7sGzpF5sMrmSB6NSasXgCYAoCkZBsRsgxODRu8ssmotN0gAHAKbVI6sjpa96E6hTbV7KeyBrRSuXpniY3WU67eDDvUwwi1+HvmzLBPnCRe8pyqvUdjZyJF5oPWyIwQEhjbFDqelsCVCkJaloWRQu6E29OH0jbdGWR1RPulaVA1+6cEe4iMgFYrV//ocIOXY8KhuYELAT3t6c2SmKwkNXrc33TJc1IR5pdeeqmxp6en9/Tp0+d6enp6Dxw44L6PrrqEBGQUiRCiZJ68CO1SwiBxpWk/JXhgJ+L+bVL70wI6VbmaoO3Ose7+Ni1A4/MLrDRLMqUjbHji6Ku9SgujCgsLqS8+/Wjqn6dePPfLhi/crzzz70b3i+Puv/yhpPcLZmCqvLz8bsrfsgDQCQBKk12/8LdOAAgoQKf0PUPCcX0qEJ1DhEepPV5lAkil8b2DCsfxkvOFVK4k7WkBrVWu3qwGpi5XxyMLrPyObTGMQJ0gysvohYWF1MfBv42UPPhnavujG2DY/Ths3/04GB9MgjFvHijTKeq9d/8YvIugZgGgQwBDroDwtw6hk6Uxp1uhnUoAqAWAFiGzUAQAjEK86ka0q1bWXqXCQCEET61HSuEFI7O/VrCflcF+LS2gUcvVqdJ4ao8f0BN/59dX33ZJ63nL22tZOUFss5WBYXkWkouTAPw4GLgvARauwo41Fh5eOka8+/eec3DvqlXhs1oFeEUo5f3jQoQ5pPB5k8LnTtBXpm9HtFM8nwh3rTjwdQONWq4GSIJSuTpVVoJjwqHrw1eQFjtZHGWN4qS0vLycdpYvOA27HgaITgggjwNExyC5OAHAjwFEJ2BH/CoU7BikampqnFmEKJfeOtCoEJqwKezu0glgIEV7IIRAWjalyupQCu2p/b6MMID4rGQ5tKAvFSaI8jBiSuMh5mPd5z0oE0SjOY+w1W8+4Ka8vJz+7sb7YFhdFODd3JLRcUhGw5BcjsBGYgnWEysQnQ3Cc889t5VA6/FIRBYHB60CYCr1qaTK0lVIAXjUEI9SgVaXdAOdkEzmUmZC9la7NyeIt+4NDAcGO7UKIIkIx36FvKh/M47etWsXEV9ZB+DGAPhxgOgkJJdmIHlzATZWV2F19TtIrAIsJ5KwAxLZHr88QseoqSKLQKezAo/NUjup2tyVgf1bD/TSxByjp1wdm5hlxrrPey55TtZO+Qc7UNN4iJPD5wEAotEob9iRD2scC8mb87CxugzraxuwsgqwvJKEpTjA4rIBuBhAdOMRiEaj2QwT5I/3fV4HFHLvdTmLAytdr8hm+HvIv3s0g7b2bDnQ67E4z+vIRtjqq916MhjiOVD2N5rzCKPZRPT39/etPuTkv+XXYWU1CfEEQCwBsHgTIBoD4GIGuBFNQuwmALmnCfr7+/uyCDSj0KEocaNbofMzsYtFDEO0wgs+g6sApXBONs3fEYTsxtYCLca5qPuWHnnZm86dJNeHP0O6tctkJaloNMr/6a+Xu9Ye+RXcWDRAdBmAWwL4dhHgOg8wv5CEr28AsMZ9cOY/K/5r166xWQRaKQ/r1Qg9KJUZfSgDO3iF41s1IGxVsCHVZd6l8b3aMwgbGIXfsVVjcFFZAToR4diZNJaL6j2HnqzLiRMnOt77rCJgLvUAO78Nvpw2QGQBgI0YgI8ZAB7/Oewu/jXz+uuveyC7UsoWiNU6t8qsf0RlRp/OZZ2Q/D+gMHC8KeCTe9MuhPMGVaB2gXIOXM8gVcq6tKvYIa5RGRH+7QTI4C1YRnMe8cw/3phCeQTueizOf3zQV6lnzQVZYXc+5TsU1NrvoudkrTQEOnbsWMcvmmtcpvVRavrrb8BiIWH7QzQfeOe/Xd3d3T6e57cizUaoQCoCz0hCAEIlXChK4c2nVK4MhNCmB24VWEZULvtdgi0EAOxTCDdY+H7ON5gi6+GXzB9cKvu1wO2Fnw4ZoCHhnFq/o9T+PaBcgGEBoCij17oVNDvaNm9k1RbHTIYueU4h35Vtebassfz3Ls0iyMcHvZWxibnvXdbEXHM0GuWnp6fZLQJZDl4Q9Jd7lUD63s+nETp0wa2ydDp28KBcgJEDHdKR1pPDigK0OOhR15ZI7a8EADajPPTMmWEf6m1P4npmZKAdZftQ9lOCGQBgaGgoNDQ0FBodHWXuAMxSMPVM7EIIMKOEAvt0DhAlu1H68UPhaoASD7ek+TsyadrPph1DSzWua4LY4LXtrdJchYX6VgCOmQxBbomFzZJsE6gv2uGFy3Ctjo7rUIFanAh6VEKYFkhdKewUPJuefK8vxQAQ29QDpBrUlcL30mV/Vt4k+5T3UJDU8Wy5sbfOe2ZUcs1Ehd1Z9sZrvSjvbPn8zdMtd8GdKtJJGw+ZF09oSVssYnuUsBFw+319WpKHHJ3C4JK3SwlQbdVNyrQkq8Gmsj8rQJusJPXTt9tGUN+RInrXsH+wMzY5y6zHEjxRYXfm76126Xlfyz28uD9XpAV0zsmYjUbEcnWRG/2BiSRd7KzyFTvTPefc+xcDGGYsubK2OCkcGOy4U8/FiEcWWNQyOhYGOm2NHg806X3vYDow60n/YWGgMwo9PtXx0p90YcahBpaatme7wUSEYxPzC9csjicbMcx3vWrhVmaEh8089P9y2WDDVjVsLsmny3/nOpeXhfdyz5wd6gr7BztQ3xiAdf/KsJWNm6wk9cTR13rJNN9/wjHh0FTgg04OvwIZKxeAFmXbW+Uucr3QjuqtMchYOQ20KJK2Oy3PljWaSx6ryLOSlMlKUmuxOL8RS/BLE7MMd3nyw+vDV/pwnIyFhYWFhYWFhYWFhYWFhYWFdX/r/4s3y7n+KSZuAAAAAElFTkSuQmCC",
    caption: "Utopic.ai",
    link: "https://utopic.ai",
    description: utopicDescription,
  },
  {
    logo: "https://play-lh.googleusercontent.com/8vlY-zSQWFQI4gDzDG2XGcP8ex7ZM55jvpROBemYgA2PY_LCDXuRIlFpCYHGfMrmNiN6=w240-h480-rw",
    caption: "RoverX (YC S21)",
    link: "https://roverx.io",
    description: roverxDescription,
  },
  {
    logo: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/5189742/397535_402482.png",
    caption: "Avalanche Computing Taiwan",
    link: "https://www.avalanc.com",
    description: avalancheDescription,
  },
  {
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/y6qc0zqauaak16oxl3dp",
    caption: "Evitado",
    link: "https://evitado.io",
    description: evitadoDescription,
  },
];

const CompaniesSection = () => {
  return (
    <Box data-aos="fade-right">
      <Heading
        size="lg"
        marginLeft="30px"
        textAlign="left"
        fontWeight="100"
        marginBottom={{ base: "20px", md: "40px" }}
      >
        Experiences
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Ensure the items are centered
        justifyContent="center"
        marginBottom="25px"
        marginTop="10px"
        width="100%" // Ensure it takes full width
      >
        <HStack spacing='24px'>
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              name={company.caption}
              description={company.description}
              link={company.link}
              logo={company.logo}
              delay={index*50}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
export default CompaniesSection;
