import { Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/buttons/Button';
import { Header1 } from '../components/typography/Header';
import { Body1 } from '../components/typography/Body';

export default function TestPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Header1>Test Page</Header1>
      <Body1>This is the /test route.</Body1>
      <Box py="xl">
        <Button variant="default" size="md" fullWidth onClick={() => navigate('/')}>
          Back to the main page
        </Button>
      </Box>
    </div>
  );
}
