import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import { useTranslation } from "react-i18next";
import flagINDImg from "@/assets/images/flag-ind.png";

export function Header() {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hin" : "en");
  };
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack spacing={3}>
        <Image src={bubbleImg} h={10} />
        <Link
          pr={10}
          href="mailto:maniaryash21@gmail.com?subject=Contacting you from your portfolio"
          fontSize="lg"
          fontWeight="bold"
        >
          {t("hireMe")}
        </Link>
        <Image
          pl={10}
          onClick={switchLanguage}
          src={i18n.language === "en" ? flagENImg : flagINDImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
}
