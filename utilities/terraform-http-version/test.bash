declare Loader=(
"▐●          ▌"
"▐ ●         ▌"
"▐  ●        ▌"
"▐   ●       ▌"
"▐    ●      ▌"
"▐      ●    ▌"
"▐       ●   ▌"
"▐        ●  ▌"
"▐         ● ▌"
"▐          ●▌"
"▐         ● ▌"
"▐        ●  ▌"
"▐       ●   ▌"
"▐      ●    ▌"
"▐     ●     ▌"
"▐    ●      ▌"
"▐   ●       ▌"
"▐  ●        ▌"
"▐ ●         ▌")

export SUB="/C=US/ST=MN/O=Cloud Technology LLC./CN=localhost/subjectAltName=DNS:*.nexus.cloud-technology.io,DNS:nexus.cloud-technology.io,localhost,*.localhost,0.0.0.0"

for (( i = 0; i < 5; i++)); do
    (openssl req -x509 -newkey rsa:8192 -nodes -sha256        \
        -days 365 -passin "pass:Development"                  \
            -subj "${SUB}" -keyout "Development-${i}.key"     \
                -out "Development-${i}.pem") &>/dev/null &

    PIDs[${i}]="${!}"
done;

while {kill -0 ${PIDs[@]} &>/dev/null}; do
    for ((i = 0; i < ${#Loader[@]}; i++)); do
        printf "${Loader[$i]}\r"
        sleep 0.185
    done
done
