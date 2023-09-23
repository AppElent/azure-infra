import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { useSettings } from '../../hooks/use-settings';

import { Seo } from 'src/components/seo';
import { useData, useResource } from 'src/custom/libs/data-framework';
import useLocalStorage from 'src/custom/hooks/use-local-storage';
import { useQueryParam } from 'use-query-params';

const Page = () => {
  const settings = useSettings();
  const dummyData = useData('dummy01');

  const [value, setValue] = useQueryParam('test');
  console.log(value);

  console.log(998, dummyData);

  usePageView();

  return (
    <>
      <Seo title="Index" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          Index page{JSON.stringify(dummyData)}
          ---{JSON.stringify({ dummyData })}
          <button
            onClick={() => {
              setValue(undefined);
            }}
          >
            test query param
          </button>
        </Container>
      </Box>
    </>
  );
};

export default Page;
