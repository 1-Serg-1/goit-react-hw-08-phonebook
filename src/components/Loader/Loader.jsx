import { ThreeDots } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" position="absolute" top="60px">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};
