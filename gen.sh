cat <<EOF
"typesVersions": {
EOF

for major in 9 8 7 6 5 4 3; do
    for minor in 9 8 7 6 5 4 3 2 1 0; do
        folder="versioned/ts${major}_${minor}"
        mkdir -p "$folder"
        sed 's/export type Major.*$/export type Major = '$major'/;s/export type Minor.*$/export type Minor = '$minor'/' ./index.d.ts > "${folder}/index.d.ts"
        echo "  \">=${major}.${minor}\": { \"*\": [\"${folder}/*\"] },"
    done
done

cat <<EOF
}
EOF
