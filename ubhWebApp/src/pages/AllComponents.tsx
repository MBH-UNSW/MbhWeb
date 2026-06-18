import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  SectionHeader,
} from '../components/typography/Header';
import { Body1, Body2, Caption } from '../components/typography/Body';
import { Input } from '../components/input/Input';
import { SearchBar } from '../components/searchBar/SearchBar';
import { useState } from 'react';
import { Button } from '../components/buttons/Button';
import { DropdownList } from '../components/dropdownList/DropdownList';
import { CheckboxInput } from '../components/checkbox/Checkbox';

import { X } from 'lucide-react'; // placeholder, maybe we can move this into individual wrapper for icons.
import { Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { RadioInput } from '../components/radio/Radio';
import { ToggleSwitch } from '../components/toggle/Toggle';
import { PillInput } from '../components/pill/Pill';
import { IconButton } from '../components/buttons/IconButton';
import { FileUpload } from '../components/fileUpload/FileUpload';
import { LoadingBar } from '../components/loadingBar/LoadingBar';
import { Avatar } from '../components/avatar/Avatar';
import { NumberedPagination } from '../components/pagination/Pagination';
import { Passcode } from '../components/passcode/Passcode';

export default function AllComponents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [passcode, setPasscode] = useState('');

  const navigate = useNavigate();

  return (
    <div>
      <div style={{ textAlign: 'center', color: 'var(--mantine-color-ubhRed-8)' }}>
        <Header1>UBH Components Library</Header1>
      </div>

      <Box py="xl">
        <Button variant="default" size="md" fullWidth onClick={() => navigate('/test')}>
          Hey Backend! Click this to go to blank page for testing!
        </Button>
      </Box>

      <SectionHeader>Typography</SectionHeader>
      <section>
        <Header1>Header 1</Header1>
        <Header1 italic>Header 1 (italic)</Header1>
        <Header1 bold>Header 1 (bold)</Header1>
        <Header1 underline>Header 1 (underline)</Header1>
        <Caption>fontSize: 40px, weight: 700, lineHeight: 1.2</Caption>

        <Header2>Header 2</Header2>
        <Caption>fontSize: 32px, weight: 600, lineHeight: 1.3</Caption>

        <Header3>Header 3</Header3>
        <Caption>fontSize: 28px, weight: 500, lineHeight: 1.35</Caption>

        <Header4>Header 4</Header4>
        <Caption>fontSize: 24px, weight: 400, lineHeight: 1.4</Caption>

        <Header5>Header 5</Header5>
        <Caption>fontSize: 20px, weight: 400, lineHeight: 1.45</Caption>

        <Header6>Header 6</Header6>
        <Caption>fontSize: 16px, weight: 400, lineHeight: 1.5</Caption>

        <Header3 color="var(--mantine-color-ubhRed-8)">Header 3 (color)</Header3>
        <Header4 align="center">Header 4 (centered)</Header4>
      </section>
      <section>
        <Body1>Body 1</Body1>
        <Body1 italic>Body 1 (italic)</Body1>
        <Body1 bold>Body 1 (bold)</Body1>
        <Body1 underline>Body 1 (underline)</Body1>
        <Caption>fontSize: 16px, weight: 400</Caption>

        <Body2>Body 2</Body2>
        <Caption>fontSize: 14px, weight: 400</Caption>

        <Caption>Caption / Label - 12px</Caption>
        <Caption italic>Caption (italic)</Caption>
        <Caption color="var(--mantine-color-ubhRed-8)">Caption (color)</Caption>
      </section>
      <SectionHeader>Inputs</SectionHeader>
      <section>
        <Input
          variant="single-line"
          label="Single-line (default ⇒ hover ⇒ focused ⇒ filled)"
          placeholder="Enter text"
        />
        <Input
          variant="single-line"
          label="Single-line (error)"
          value="Text error"
          error="This field is required."
        />
        <Input variant="single-line" label="Single-line (loading)" loading={true} />
        <Input
          variant="single-line"
          label="Single-line (disabled)"
          placeholder="Text cannot be entered"
          disabled
        />
        <Input
          variant="multi-line"
          label="Multi-line (default ⇒ hover ⇒ focused ⇒ filled)"
          placeholder="Enter text"
        />
        <Input
          variant="multi-line"
          label="Multi-line (error)"
          value="Text error"
          error="This field is required."
        />
        <Input variant="multi-line" label="Multi-line (loading)" loading={true} />
        <Input
          variant="multi-line"
          label="Multi-line (disabled)"
          placeholder="Text cannot be entered"
          disabled
        />
        <Input
          variant="numeric"
          label="Numeric (default ⇒ hover ⇒ focused ⇒ filled)"
          placeholder="12345678"
        />
        <Input variant="numeric" label="Numeric (error)" error="This field is required." />
        <Input variant="numeric" label="Numeric (loading)" loading={true} />
        <Input variant="numeric" label="Numeric (disabled)" placeholder="12345678" disabled />
        <Input
          variant="email"
          label="Email (default ⇒ hover ⇒ focused ⇒ filled)"
          placeholder="user@example.com"
        />
        <Input
          variant="email"
          label="Email (error)"
          value="user@invalid"
          error="This field is of an invalid format."
        />
        <Input variant="email" label="Email (loading)" value="user@saving.com" loading={true} />
        <Input variant="email" label="Email (disabled)" placeholder="user@example.com" disabled />
        <Input
          variant="phone"
          label="Phone (default ⇒ hover ⇒ focused ⇒ filled)"
          placeholder="+61 423 456 789"
        />
        <Input
          variant="phone"
          label="Phone (error)"
          value="+61 423 4"
          error="This field is of an invalid format."
        />
        <Input variant="phone" label="Phone (loading)" value="+61 423 456 789" loading={true} />
        <Input variant="phone" label="Phone (disabled)" placeholder="+61 423 456 789" disabled />
      </section>
      <SectionHeader>Search bar</SectionHeader>
      <section>
        <SearchBar
          label="Search bar (default ⇒ hover ⇒ focused ⇒ filled)"
          placeholder="Enter text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          onClear={() => setSearchQuery('')}
        />
        <SearchBar label="Search bar (error)" value="Text error" error="This field is required." />
        <SearchBar label="Search bar (loading)" loading={true} />
      </section>
      <SectionHeader>Buttons</SectionHeader>
      <section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Body1>default:</Body1>
            <Button variant="default" size="xs">
              x-small
            </Button>

            <Button variant="default" size="sm">
              small
            </Button>

            <Button variant="default" size="md">
              medium
            </Button>

            <Button variant="default" size="lg">
              large
            </Button>

            <Button variant="default" size="xl">
              x-large
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Body1>outlined:</Body1>
            <Button variant="outlined" size="xs">
              x-small
            </Button>

            <Button variant="outlined" size="sm">
              small
            </Button>

            <Button variant="outlined" size="md">
              medium
            </Button>

            <Button variant="outlined" size="lg">
              large
            </Button>

            <Button variant="outlined" size="xl">
              x-large
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Body1>text:</Body1>
            <Button variant="text" size="xs">
              x-small
            </Button>

            <Button variant="text" size="sm">
              small
            </Button>

            <Button variant="text" size="md">
              medium
            </Button>

            <Button variant="text" size="lg">
              large
            </Button>

            <Button variant="text" size="xl">
              x-large
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button>Button</Button>

            <Button leftIcon={X}>Button</Button>

            <Button rightIcon={X}>Button</Button>

            <Button leftIcon={X} rightIcon={X}>
              Button
            </Button>
          </div>

          <Button variant="default" disabled>
            Disabled
          </Button>

          <Button fullWidth>Full Width</Button>
        </div>
      </section>
      <SectionHeader>Dropdown List</SectionHeader>
      <section>
        <DropdownList
          label="Dropdown list (default ⇒ hover ⇒ focused ⇒ selected)"
          placeholder="Select an item"
          value={selectedValue}
          data={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
          onChange={value => setSelectedValue(value)}
          searchable
        />
        <DropdownList label="Dropdown list (loading)" loading={true} />
      </section>
      <SectionHeader>Checkbox</SectionHeader>
      <section>
        <CheckboxInput
          label="Label"
          description="Checked ⇒ unchecked"
          checked={checked}
          onChange={e => setChecked(e.currentTarget.checked)}
        />
        <CheckboxInput label="Label" description="Disabled" disabled={true} />
        <CheckboxInput label="Label" error="There is an error" />
      </section>
      <SectionHeader>Radio</SectionHeader>
      <section>
        <RadioInput label="Label" description="Unchecked" />
        <RadioInput
          label="Label"
          description="Unchecked ⇒ Checked"
          checked={radioChecked}
          onChange={e => setRadioChecked(e.currentTarget.checked)}
        />
        <RadioInput label="Label" description="Disabled" disabled={true} />
        <RadioInput label="Label" error="There is an error" />
      </section>
      <SectionHeader>Toggle Switch</SectionHeader>
      <section>
        <ToggleSwitch
          label="Label"
          description="Unchecked ⇒ Checked"
          checked={toggleChecked}
          onChange={e => setToggleChecked(e.currentTarget.checked)}
        />
        <ToggleSwitch label="Label" description="Disabled" disabled={true} />
        <ToggleSwitch label="Label" error="There is an error" />
      </section>
      <SectionHeader>Pills</SectionHeader>
      <section>
        <Body1> Solid (small/medium/large): </Body1>
        <section>
          <PillInput variant="solid" label="Emergency" size="sm" />
          <PillInput variant="solid" label="Appointment Making" size="sm" />
          <PillInput variant="solid" label="Supply Restock" size="sm" />
          <PillInput variant="solid" label="General Question" size="sm" />
          <PillInput variant="solid" label="Archive" size="sm" />
          <PillInput variant="solid" label="Other" size="sm" />
        </section>
        <section>
          <PillInput variant="solid" label="Emergency" size="md" />
          <PillInput variant="solid" label="Appointment Making" size="md" />
          <PillInput variant="solid" label="Supply Restock" size="md" />
          <PillInput variant="solid" label="General Question" size="md" />
          <PillInput variant="solid" label="Archive" size="md" />
          <PillInput variant="solid" label="Other" size="md" />
        </section>
        <section>
          <PillInput variant="solid" label="Emergency" size="lg" />
          <PillInput variant="solid" label="Appointment Making" size="lg" />
          <PillInput variant="solid" label="Supply Restock" size="lg" />
          <PillInput variant="solid" label="General Question" size="lg" />
          <PillInput variant="solid" label="Archive" size="lg" />
          <PillInput variant="solid" label="Other" size="lg" />
        </section>
        <Body1> Outlined (small/medium/large): </Body1>
        <section>
          <PillInput variant="outlined" label="Emergency" size="sm" />
          <PillInput variant="outlined" label="Appointment Making" size="sm" />
          <PillInput variant="outlined" label="Supply Restock" size="sm" />
          <PillInput variant="outlined" label="General Question" size="sm" />
          <PillInput variant="outlined" label="Archive" size="sm" />
          <PillInput variant="outlined" label="Other" size="sm" />
        </section>
        <section>
          <PillInput variant="outlined" label="Emergency" size="md" />
          <PillInput variant="outlined" label="Appointment Making" size="md" />
          <PillInput variant="outlined" label="Supply Restock" size="md" />
          <PillInput variant="outlined" label="General Question" size="md" />
          <PillInput variant="outlined" label="Archive" size="md" />
          <PillInput variant="outlined" label="Other" size="md" />
        </section>
        <section>
          <PillInput variant="outlined" label="Emergency" size="lg" />
          <PillInput variant="outlined" label="Appointment Making" size="lg" />
          <PillInput variant="outlined" label="Supply Restock" size="lg" />
          <PillInput variant="outlined" label="General Question" size="lg" />
          <PillInput variant="outlined" label="Archive" size="lg" />
          <PillInput variant="outlined" label="Other" size="lg" />
        </section>
      </section>
      <SectionHeader>Icon Buttons</SectionHeader>
      <section>
        <Body1> Solid (x-small/small/medium/large/x-large): </Body1>
        <div>
          <IconButton icon={X} variant="default" size="xs" />
          <IconButton icon={X} variant="default" size="sm" />
          <IconButton icon={X} variant="default" size="md" />
          <IconButton icon={X} variant="default" size="lg" />
          <IconButton icon={X} variant="default" size="xl" />
        </div>
        <Body1> Outlined (x-small/small/medium/large/x-large): </Body1>
        <div>
          <IconButton icon={X} variant="outlined" size="xs" />
          <IconButton icon={X} variant="outlined" size="sm" />
          <IconButton icon={X} variant="outlined" size="md" />
          <IconButton icon={X} variant="outlined" size="lg" />
          <IconButton icon={X} variant="outlined" size="xl" />
        </div>
        <Body1> Text (x-small/small/medium/large/x-large): </Body1>
        <div>
          <IconButton icon={X} variant="text" size="xs" />
          <IconButton icon={X} variant="text" size="sm" />
          <IconButton icon={X} variant="text" size="md" />
          <IconButton icon={X} variant="text" size="lg" />
          <IconButton icon={X} variant="text" size="xl" />
        </div>
        <Body1> Disabled (default/outlined/text): </Body1>
        <div>
          <IconButton icon={X} variant="default" disabled />
          <IconButton icon={X} variant="outlined" disabled />
          <IconButton icon={X} variant="text" disabled />
        </div>
      </section>
      <SectionHeader>File Upload</SectionHeader>
      <section>
        <Body1>Click variant:</Body1>
        <FileUpload variant="click" status="empty" />
        <FileUpload
          variant="click"
          status="uploading"
          fileName="document.pdf"
          progress="TODO progress bar here."
        />
        <FileUpload variant="click" status="success" fileName="document.pdf" />
        <FileUpload variant="click" status="error" />

        <Body1>Drag variant:</Body1>
        <FileUpload variant="drag" status="empty" />
        <FileUpload
          variant="drag"
          status="uploading"
          fileName="document.pdf"
          progress="TODO progress bar here."
        />
        <FileUpload variant="drag" status="success" fileName="document.pdf" />
        <FileUpload variant="drag" status="error" />

        <Body1>Camera variant:</Body1>
        <FileUpload variant="camera" status="empty" />
        <FileUpload
          variant="camera"
          status="uploading"
          fileName="document.pdf"
          progress="TODO progress bar here."
        />
        <FileUpload variant="camera" status="success" fileName="document.pdf" />
        <FileUpload variant="camera" status="error" />
      </section>
      <SectionHeader>Loading Bar</SectionHeader>
      <section>
        <Body1>Default: (0%/50%/100%)</Body1>
        <LoadingBar status="default" progress={0} label="0% complete" />
        <LoadingBar status="default" progress={50} label="50% complete" />
        <LoadingBar status="default" progress={100} label="0% complete" />
        <br />
        <LoadingBar status="default" progress={50} showLabel={false} />

        <br />

        <Body1>Paused:</Body1>
        <LoadingBar status="paused" progress={50} label="Paused - 50%" />
        <br />
        <LoadingBar status="paused" progress={50} showLabel={false} />

        <br />

        <Body1>Success:</Body1>
        <LoadingBar status="success" progress={50} label="Complete!" />
        <br />
        <LoadingBar status="success" progress={50} showLabel={false} />

        <br />

        <Body1>Error:</Body1>
        <LoadingBar status="error" progress={50} label="Upload failed" />
        <br />
        <LoadingBar status="error" progress={50} showLabel={false} />
      </section>
      <SectionHeader>Avatar</SectionHeader>
      <section>
        <Body1>Initials: (sm/md/lg/display)</Body1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar type="initials" size="sm" initials="AR" />
          <Avatar type="initials" size="md" initials="AR" />
          <Avatar type="initials" size="lg" initials="AR" />
          <Avatar type="initials" size="display" initials="AR" />
        </div>

        <Body1>Blank: (sm/md/lg/display)</Body1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar type="blank" size="sm" />
          <Avatar type="blank" size="md" />
          <Avatar type="blank" size="lg" />
          <Avatar type="blank" size="display" />
        </div>
      </section>
      <SectionHeader>Pagination</SectionHeader>
      <section>
        <NumberedPagination total={50} value={activePage} onChange={setActivePage} />
      </section>
      <SectionHeader>Passcode Input</SectionHeader>
      <section>
        <Body1>Default ⇒ hover ⇒ focused ⇒ filled:</Body1>
        <Passcode value={passcode} onChange={setPasscode} />
        <Body1>Disabled:</Body1>
        <Passcode value="1111" disabled />
        <Body1>Error:</Body1>
        <Passcode value="1111" error />
        <Body1>Success:</Body1>
        <Passcode value="1111" success />
      </section>
    </div>
  );
}
