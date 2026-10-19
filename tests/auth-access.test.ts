import assert from 'node:assert/strict';
import { test } from 'node:test';
import { hasActiveStaffProfile, isStaffRole } from '../src/auth/access.ts';

test('only clinician and nurse claims grant portal access', () => {
  assert.equal(isStaffRole('clinician'), true);
  assert.equal(isStaffRole('nurse'), true);
  for (const role of [
    'patient',
    'admin',
    'Clinician',
    'Nurse',
    '',
    null,
    undefined,
    true,
    ['clinician'],
  ])
    assert.equal(isStaffRole(role), false);
});

test('a profile must belong to the authenticated UID and remain active', () => {
  assert.equal(
    hasActiveStaffProfile('staff-1', { firebaseAuthUid: 'staff-1', isDeactivated: false }),
    true,
  );
  assert.equal(
    hasActiveStaffProfile('staff-1', { firebaseAuthUid: 'staff-2', isDeactivated: false }),
    false,
  );
  assert.equal(
    hasActiveStaffProfile('staff-1', { firebaseAuthUid: 'staff-1', isDeactivated: true }),
    false,
  );
  assert.equal(hasActiveStaffProfile('staff-1', null), false);
  assert.equal(
    hasActiveStaffProfile('staff-1', { firebaseAuthUid: null, isDeactivated: false }),
    false,
  );
});
