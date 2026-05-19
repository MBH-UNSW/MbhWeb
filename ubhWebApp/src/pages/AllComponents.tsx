import { Header1, Header2, Header3, Header4, Header5, Header6 } from '../components/typography/Header';
import { Body1, Body2, Caption } from '../components/typography/Body';
import { Input } from '../components/input/Input';
import { SearchBar } from '../components/searchBar/SearchBar';
import { useState } from 'react';
import { Button } from "../components/buttons/Button";
import { DropdownList } from '../components/dropdownList/DropdownList';

import { X } from 'lucide-react';   // placeholder, maybe we can move this into individual wrapper for icons.

export default function AllComponents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div>
      <div style={{ textAlign: 'center', color: 'var(--mantine-color-ubhRed-9)' }}>
        <Header1>UBH Components Library</Header1>
      </div>
      <Header2>Typography</Header2>
      <section>
        <Header1>Header 1</Header1>
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
      </section>
      <section>
        <Body1>Body 1</Body1>
        <Caption>fontSize: 16px, weight: 400</Caption>

        <Body2>Body 2</Body2>
        <Caption>fontSize: 14px, weight: 400</Caption>

        <Caption>Caption / Label - 12px</Caption>
      </section>
      <Header2>Inputs</Header2>
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
      <Header2>Search bar</Header2>
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
      {/* BUTTONS */}
      <section style={{ marginTop: "48px" }}>
        <Header2>Buttons:</Header2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "36px"
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Body1>default:</Body1>
            <Button variant='default' size='xs'>
              x-small
            </Button>

            <Button variant='default' size='sm'>
              small
            </Button>

            <Button variant='default' size='md'>
              medium
            </Button>

            <Button variant='default' size='lg'>
              large
            </Button>

            <Button variant='default' size='xl'>
              x-large
            </Button>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Body1>outlined:</Body1>
            <Button variant='outlined' size='xs'>
              x-small
            </Button>

            <Button variant='outlined' size='sm'>
              small
            </Button>

            <Button variant='outlined' size='md'>
              medium
            </Button>

            <Button variant='outlined' size='lg'>
              large
            </Button>

            <Button variant='outlined' size='xl'>
              x-large
            </Button>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Body1>text:</Body1>
            <Button variant='text' size='xs'>
              x-small
            </Button>

            <Button variant='text' size='sm'>
              small
            </Button>

            <Button variant='text' size='md'>
              medium
            </Button>

            <Button variant='text' size='lg'>
              large
            </Button>

            <Button variant='text' size='xl'>
              x-large
            </Button>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Button>
              Button
            </Button>

            <Button leftIcon={X}>
              Button
            </Button>

            <Button rightIcon={X}>
              Button
            </Button>

            <Button leftIcon={X} rightIcon={X}>
              Button
            </Button>
          </div>

          <Button variant='default' disabled>
            Disabled
          </Button>

          <Button fullWidth>
            Full Width
          </Button>
        </div>
      </section>
      <Header2>Dropdown List</Header2>
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
    </div>
  );
}
