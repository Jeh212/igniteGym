import { IImageProps, Image } from "native-base";

type Props = IImageProps & {
  size: number;
  borderSize: number;
};

export function Avatar({ borderSize, size, ...rest }: Props) {
  return (
    <Image
      width={size}
      height={size}
      rounded="full"
      borderWidth={borderSize}
      borderColor="gray.400"
      {...rest}
    />
  );
}
