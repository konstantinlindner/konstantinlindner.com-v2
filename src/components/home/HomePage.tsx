import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import {
  AllPhotosQueryHookResult,
  FullPhotoFragment,
  useAllPhotosQuery,
} from "../../gql";
import { WithQuery } from "../common";
import { Image } from "react-datocms";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

const NavLink = ({
  title,
  href,
}: {
  readonly title: string;
  readonly href?: string;
}) => {
  const router = useRouter();

  return (
    <Text as="li" cursor="pointer" textStyle="heading-xl">
      {title}
    </Text>
  );
};

const Header = () => (
  <HStack justifyContent="space-between" py={8}>
    <Text textStyle="heading-4xl">Konstantin Lindner</Text>
    <Box>
      <HStack as="ul" listStyleType="none" spacing="2vw">
        <NavLink title="Home" />
        <NavLink title="Gallery" />
        <NavLink title="Resume" />
        <NavLink title="Contact" />
        <NavLink title="About Me" />
      </HStack>
    </Box>
  </HStack>
);

const shuffle = (array: any[]) => array.sort(() => 0.5 - Math.random());

const Photo = ({ photo }: { readonly photo: FullPhotoFragment }) => {
  if (!photo.img?.responsiveImage) return null;

  return <Image data={photo.img?.responsiveImage} />;
};

const PhotoColumn = ({
  photoColumn,
}: {
  readonly photoColumn: FullPhotoFragment[];
}) => (
  <GridItem colSpan={1}>
    <VStack spacing="1vw">
      {photoColumn.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </VStack>
  </GridItem>
);

const PhotoGrid = ({ photos }: { readonly photos: FullPhotoFragment[] }) => {
  const numColumns = useBreakpointValue({ base: 2, md: 3, lg: 4 }) || 4;

  const shuffledPhotos: FullPhotoFragment[] = shuffle([...photos]);

  const photoColumns = new Array(numColumns)
    .fill(0)
    .map((_, colIndex) =>
      shuffledPhotos.filter((_, index) => index % numColumns === colIndex)
    );

  return (
    <SimpleGrid columns={numColumns} columnGap="1vw">
      {photoColumns.map((photoColumn, index) => (
        <PhotoColumn photoColumn={photoColumn} key={index} />
      ))}
    </SimpleGrid>
  );
};

const Photos = () => {
  const query = useAllPhotosQuery();

  return (
    <WithQuery query={query}>
      {({ data }: AllPhotosQueryHookResult) => {
        if (!data?.allPhotos) return null;

        return <PhotoGrid photos={data?.allPhotos} />;
      }}
    </WithQuery>
  );
};

const HomePage = () => (
  <Box px="4vw">
    <Header />
    <Photos />
  </Box>
);

export default HomePage;
