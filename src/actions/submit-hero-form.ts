'use server';

export const submitHeroForm = async (formData: FormData) => {
    // Simulate a 10-second delay using a Promise
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Action complete, you can proceed with other operations here
    console.log('Action complete after 10 seconds delay');
};