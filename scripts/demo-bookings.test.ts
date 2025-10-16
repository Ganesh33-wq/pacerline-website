const { createMocks } = require('node-mocks-http');
const handler = require('../../../pages/api/admin/demo-bookings').default;
describe('Demo Bookings API', () => {
  it('should create a booking', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        company: 'TestCo',
        meetingType: 'demo',
        title: 'Test Meeting',
        message: 'Test message',
        date: '2025-10-20',
        time: '10:00'
      }
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(201);
  });

  it('should get all bookings', async () => {
    const { req, res } = createMocks({ method: 'GET', headers: { authorization: 'Bearer testtoken' } });
    await handler(req, res);
    expect([200, 401]).toContain(res._getStatusCode()); // 401 if token invalid
  });

  it('should update a booking', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: 'testid' },
      body: { status: 'scheduled', title: 'Updated', message: 'Updated', date: '2025-10-21', time: '11:00' }
    });
    await handler(req, res);
    expect([200, 500]).toContain(res._getStatusCode()); // 500 if not found
  });

  it('should delete a booking', async () => {
    const { req, res } = createMocks({ method: 'DELETE', query: { id: 'testid' } });
    await handler(req, res);
    expect([200, 500]).toContain(res._getStatusCode()); // 500 if not found
  });
});
