const API = {
    post({ duration, amount }) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: {
                        amount,
                        duration,
                        // fake formula
                        monthlyInstallment: Math.floor((amount / (duration * 12)) )
                    }
                });
            }, Math.random()*2000);
        });
    }
};

export default API;
