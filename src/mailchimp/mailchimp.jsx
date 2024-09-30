import { Mailchimp } from 'mailchimp-api-v3';

const mailchimp = new Mailchimp('21d9cfdb1051d1152497e0baa62e0640-us11');

const subscribeToMailchimp = async (email, username) => {
  try {
    const response = await mailchimp.lists.addMember({
      id: '5ed3eb52a9',
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: username,
      },
    });

    console.log(`Subscribed ${email} to Mailchimp list`);
  } catch (error) {
    console.error('Error subscribing to Mailchimp:', error);
  }
};

export default subscribeToMailchimp;