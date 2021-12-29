import { Typography, Image } from 'antd';

const { Text } = Typography;
const featureNumber = { fontSize: "18px", color: "#163663", fontWeight: '400',lineHeight:'24px', minWidth: "42px", minHeight: "24px"}

// render data with switch
export const renderData = (support, text) => {
  switch (support) {
    case "true":
      return (
        <Image
          preview={false}
          alt="right"
          width={24}
          height={24}
          src="/static/check.svg"
        />
      );

    case "false":
      return (
        <Image
          preview={false}
          alt="minus"
          width={24}
          height={24}
          src="/static/underline.svg"
        />
      );

    case "text":
      return <Text className='feature-number'>{text}</Text>;

    default:
      return <Text>none</Text>;
  }
};