import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Glass Cloud",
    description: "A secure cloud storage platform where users can upload, save, and manage photos, videos, and files with encrypted storage and authentication.",
    features: ["Authentication", "Secure cloud storage", "Media uploads", "Encryption", "Responsive dashboard"],
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&fm=webp&q=70&auto=format&fit=crop",
    github: "#",
    live: "https://glasscloud.vercel.app"
  },
  {
    title: "Paradox Chatbot",
    description: "An AI-powered chatbot platform where users can talk naturally with AI for conversations, emotional comfort, and interactive experiences.",
    features: ["AI conversations", "Real-time chat", "Smooth messaging UI", "Personalized interaction"],
    tech: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC6CAMAAABRJOIbAAABU1BMVEX///8cNVYuMkIVreAzXZlXhcff6O38/Pz5+fkAqN49cLj29vYAqt/z8/Px8fFSgsbf8Pnn5+eCyurk5OQjY7MVsuZFd7yJp9YcMFExabUaUJIAIEnf39+1xeDZ3+mnutt5ptcaYYcAJ00AJUxXd6g/0O6PqdPJ1OgAHEcOLVEUGjAAGEWett3n8PTm6/QiJzkvKjgXjbolVZVKuuXh8/pFaqDM6vets70bVHhqbHaX1e80OEhmjcUeUpOr2/GZqsdhwefBxs1fbYLA5fVPUl4zSGXuqAB+lboAQoxsh7HM0NZQcqWboq+Qo8N3gpNSYXgoPl2UlpwLFCxTZHt+jJwyxOkblcEidZiiqbT20IrzxGr++e/1y4DM1OO+zecAO4mCn7QAADx+gIdgY22n5vV83PJdsdYoWHOHiZErQ1gggadBRFLyvFL87tb43K3xtTn31p0UWlmPAAAXDElEQVR4nO2d+3/S1v/HgyBJSqAFSksJ0A36KY0tqITChpVCEbsiArWdQ13dd7p959z08/3/f/qeSy4nkMtJuKSbvrZHKZHcnn3fzsk5B4b5qq/6qq/6qq/6qq9yr3zu/OLi/PQm4veF3ApFTqs/hELHoUwmU73I+301/iuXubgpswzDVXJ7mWrmouz3Bfms83OCQP5ZtVq98e9iboGmfeT8cSiT8+dSboWeV2a2ACJfro3czPAANlMNPf5S4whnmlNCoepe5Pmqr+VWyMQ+GC73vBoK/fDleg3TDsrgp9xS3+cBj1DVxwvyWVybketMAgGRu3BLJROqfpkeo6jMM912FwDp8jW04SazwjxTyZtqZeefVS1VZ/h2G/iN3FY2nf7Crurs5xlzHfvWrGL5VLverbcTTF0xEKC9VZ39JhMyly9Oi+2yVqtx4GeZabe1f1mZgZxWLYCEVvY3IXQcJd9t8Bu1ZrPJrfQSbhWQSuaCfAuiSK3VElYM5PEtAlJ6/PhUf1fj6+BnN7Haa9gNHSPtVadNxQcg51WyYQvTDEg0OK6uLIZoKl9UFwSEnRbtjhyqSHfVty1oIHVExbSkX5Dy+9tmOqowe3MDmUHhjktu7zhUPS8bYkazjl5K7i+GUvmtdQuVbx7PAUS9aw6J/J3cYk/lhsllQo/NSsLd5QXW/fW7ugAG/ffdSMYrEPX24f1ykWg82+9A9fvZWDTC6WScmQC/NakIS0us27cJBCe7uaO76vv1I9YbEO1vz8U7g+uzXuDg8EBUdHBYHI+G15N+LAJ4RCIqFMuDccfV6gyR3DJrRB3I+j7acLI+DxBkGuD+ov3BWeBQLEhSOjAlSZIK4mFv2OhHKJhEj0FkNRrE8/O57thBBBCOKYFQWpkDiHJnyckVZDFNYopL4UAaNmKQSQQzMT8md5EJZYiO5rdLbkPoQE64ytr6OsN4dRnFUbKD3qETDA1K8fCsEcdIOEskb0OZx5lnz9+CJnfp/IfjJbf7iRiytbW+dcIw3iwE04g2AI0ZJ3Fi0oFI7MwkdwHb2z8A7S29G4QMqtu7JZYpeQGiGMdQLLqioTARA4O45jkWZ8iXdnOl/AqaMSSQt8Bj31plmYy162Ic/SuR0lNmVSxeZ7moPZIViQRSYna39Bh7xP6SyajleyZzYXmhGMfIOw5sJsPbgWSbLMxOyCLtiKlU8uePEZKLsuWDoYXgQEiKw2REQbJKAlMiLWS/dLJOAoGKnIaA51Qt+w8hjvhwfhxQBWkQi0Z9NhISCAtaNtNAgHLPMlZPl1H0mNBmWWcVe52IgmRVAKZlDKpHMxaClL+4MN0ZeUtPXBQOoLQ4TEah3/hmJGQMWb9LvjkiP2aW75B5DA6oEm1BHPfo/EoK+GskR2RQJbW+67An/BsmR3TmUbyOgzLlrEj1YXEY89FIKlt6k3+qP8R+R3i5HcrocdDB+wzpPl7sZaO4n8AXIvvbONuCut3YY2Yr6C7Xh1T3F5CGyk4c3edBg7jjIxGG+WYdWse+m6eV4FKjV7TRVOyru1GaSCBwOEBE/AkkZdhRtuvqSSUsPnrUyfYgrO43KNDuAwKJb0R2105c9tnCbCvRFx8eLATkpVE8hkProu/XUSW3T/YhDzfNWula3XNMv1NAAkRwIFnw/S5ckIe7YuxQMZFrao9BRHrJfwQRyOPAFQ/gNA1Q2cWGLmtaqfdPsBH39gF1eF2p9FzZByLyD/Aa2DHm+sZAiJzkK2fu24CYiM8dArYC9Ucs4KGbsNjJV65dAkkDFc+wifh931aCT13o6w9CYj6fpy9CEI7Ad0j/k89vuFbN+VYWBYQ5c+8wUkGEQBq/Ful7TtIfgymkIO9Fqe6qeAzcBtS0OB4OGn2WYyOdxuCqSMcz/TEVnEt8fTU8+pTtOU3FXsdwjNiAqsQdz8kjKMir4MHGXMQPqVAQDw+uZw4T74kHwHdsI3P623mBBPlVAGFoM6dULI6vrif9ZMzsOLF8ZzDsSQfWEeUfAQTwaFBVqBKIGg3nh2zR/mRUsGgSaUAE9D+8P+X19gABDhOn6QIsSMNOmbYvIdYw72lVgQjtYLAtCLzAd+WmIAAmYIMsC7IcBG8EBRL8FZIjNq0ECI3DSIXrsPVDLTP1r8RZK1GB8PUgX+MTrTZfk1t8ohmU67zQTPCtdhD8TAgJGdJJtOREUwD/nJDbfEJeDRA6hxHPAA63ZWV/PJOKdSDNZk0G/0EgrVaiG+wCIN1mvb3RbjW7qXqrKQvtmswlmuBtm0mBD67IQlg24ogjXWiUw14mww2nUetAEolaYqPVDW7IzVqQ3wi2AJBWu9uu8ak6YFJvCUK7CQwpWO/K4J+7iS6/EiCwJHMqqdLjvjceDDOZKm8MLiPUwV0CCwF33wwCAMhluq16gmfkOogs7RZfTwE8GwkmKDPySiwERNSkU0RNj/NeeTBMw0hEyzLg9mQBRdJgim+3ebRBDsrgDdgONsIPpeBLCkRa8EudXxEQ5+5QycQ+4v1OY3J5+eHd90gfPlxeThqdrEl1YmwSWNQhgsXv+sZmYiVZBhhI1qkNI3bK4TCxT3by7q97QPenhTY++dCZomJIYWQdoidSMwT8FBjt7ZKBOBqINAQ8tGIs++EOIHHHRoDLkwZZrkTMgMA6RG6Cm4alCAgfAgaE3qOiTe42LQq2JQNxNJB0Pqw5TPb9PVsYqu7dvyTq2QZxCiKoCu1utw1+JEAOAWkFBBRYa4A8A8oQud2Su/LqgVAYSOEaGIhSgFy+oMKB7OROXz8N8YzCAGQjVUtxqXqqLrNyKyGAWmMDliapOswviZpFq2e5QBxbuQXdQN7do8UB9ULvHZjoecwABGTVdq3VkuugTJVboIoHlWuLbybqfLsltMxxLBUIrEEcci6KIDgiXLriAfwmq54nphc600BAwVUXNmS2VWvDno5UsAbKtFa33ko1TUPtsoGwPYd+ZbERVlJM9oU7HnfuP9FOpCcasg4BRYYMG3VCSm7JKRBCZVhrtGFETeEPrBgI4OH0IEYSw6rHfE8dPzQT0Zym8atKxLQOEUD7Dr602oJFGbIqIA4hVQIN/rDiMTG3BgKkmQjXUAck2XYQCVQ9I8sEYh9SC6N8GUQQnGMarg0EmEhcP1lHcgZCp6UBAR7TsfMY6QrSUEOIe48BQBrE6fBjwZUAKf/2+++/u++cd/KYYh7zwCHEPQ4QVt+R50P1Wfq7uYEEnW7st/9guX2oxbJROx7SdZkAEvcQQu7c+ctwwh4yEatsSm0gTWceP8o/QiLuWuhOOUbshAkgfUMR8uDBA1MAD6b+4Z7hjKjfJT0OpsyNRKAS33a4rzrgAZpDiIhLIPbDXCTFQHCSaZBAHvz08OMfJkgefPvwoWH7PUPDF/NPB356+PAhASL1EOl/E1RyDA2AAzoqBOIqjrAcY1eVpUcqENRMuyRi6oOXKfBXniXy4CN8ZPsTsV0vVqGiSl9ROk2E1pTwHRwMkBYv47HoAgYDcIBDCpY2EMjvroCwcVsDGRqAfNCBPPgD3Q0/A+QRvss7VkAYvV59qfH4mMZ/FWkUjy9ifEQNgkgJyEBcAXFMumpMxWXIOwIIflydejTjMHg7YTr3+oZz9tSDj1Uc/He6kWYBkQUBAVEVHP1Hl0DsO5dtgOAAkPpjGshPGAjhM/eMz8NHyt2rHqOZB5TYwUDmJMIiHqjkFVK/udmRY67ssm7BGshLz0Ak0mMM5gFOOIijKDKvifyu8gBe7aYSAUDs2zHLAJImPMZgHvCEw8UEEQ4FVaqKxcDD6YGucwz50wLIt9YxBBNIgw9OmUdgcVEVRBFc+/GuVqxxbPrbZBl848GZLPPnDKgpIAHVY1LT5oHsZjFRFdhIIsjzguxu7BUA0rC3kCvLOuTRtGdovgQfK720rEM45bnmeNY80Bn7yUVEVaTyhtuZ0SzHOj3BNFaqZGH258ug8NGkUn0EostLMhsbK9W8+qD3W9Pxn2InuZCo6k0gpjr0t4tKYzeMVhzrGNsy6P9ZTW83tmU0kzQvkAuTxaQZz0BG9t2phQHZ2nXdo4pkbO06jELBedevsbwAiNOMjjEJhHXZ5Y5k7A9JOoxCka6T/gJxeiJTHJA9Zk88ADH0mGllmSWQoY9A4PJJjgN1DxQi6Aov5+xTdR4oLZ3FF5R3vQGJOY9cFkcdLe96CSJ6COEaAcdhbOlRMuknkDjFUO704VlZ7VR17zP3J+rp+r9SDHMEpao9kErp7dtlLYcLgCSpxraPtSDScW0i97XiiGqKYloFYk6k8g3WctYGBEAcx0EgHfTVIMK8dxlFXughleZMgXQvaQME8Tg5AT+WYiTUFoJ6AfBisNwjV0RefNDOZtsTpQMZ2QBhIY+tnZ0t8LKMJZMpYwhQT/MZhntPX4zcf3Gpn80p4WJJdkBy0D521tZ2gI0s4ws16IGIDW08BMNM7tAhuf/iCdHOpZzaaAvkGwLIN8sBEqG9zHJYH3PHNp68cBhVdf/+vfvfG5r9lFPXpDNrIBEUT7fWkMt8s4Tv0wBAGLo1PwLiRIsiSPHGuyf3X+BBiEYQcBzii0fvP3SMTu40JkcDMnQCgoPqsoCw1LPT81qi0a4v22lcvvv+/ZMnfz2C+uuvJ+/ff/9h0unHZ+6GLpsFUFvGug4BMLbW1ta2EJHF80BAnAYPaRc6CocNA1UNB8LLp1qfiX7ua+HSBkgOBpA1HEOOzD4wpyAQ6unHhatw2OvQ7viYeu5aYWIDpIx5ACLLKc0gEPoFDKSe18H/fRcLShZhj5ll6V7aVIhsvZ3rzq0EgEzo5+lK0sQLEeqle5AKfdvmf2lrcwdobTk8oO/T1Y+KxF4j7HYCUSPgbmp01qE/pLR/sp9b1rKaAEiWMh1ipcXxdd+FkUQmLteFw00ZH/tUI5zbqf7SQe+6Q3W5kc7ZgdsFWHFd5h8QF3lXV1qCi1B3ylHrA8dineveoYc1JbWs6xsQzu0qFyqUw2E4Hy4DwWXrNEWjYEs43x+L9nO7rVRsZP0GYv/ozu7atad6M8p7XmBT6mdtsu4KiLiNqqRQE9hMZQ+LzWCle9msj08hcFR1s9aWQfqT8GkgHhbtUQ/pa0xF03U5F6uxGaWPyJuW5yVYcQjxFcgcQWQJQAJ9X2Mq7iJKejVw6WzRLiONkv6GEBREWIfn3ZYSB4sOqoWBzx6DfWbizWeknoXDhMN9kxUhqID0bwOQiJeV3AJScZSHnWigDotFyaoMWU1ndkUImmOOskoV4uPCZjDx0j0gIGEcSKNBPmxVu7OgVB32RMevXJmW4jH+LvQGgERc5RlJlM4mfZt2jKp4ZzASi26YSP57DPaZuCsaHRfPzOKTkUjfJXeW9bdux4I+Q1mbSeKo4foJYnIQoCxLxMYt8BhsIlRP1SRx2Hc+nJkaY5rjw3aM/x6DgXAUhYM4muOBO00/IgipSlXm8+KZMKw69qxKUsf5SHYnoehpvh0Ggk0k4pB5D8/m7tbNOwynKlzegiIEiXU2kcOG82Gcz+Owcn72VoRUdKUsF43aNGjSosdgOq1rmzGqyEBW1dB1MHdsIpYXmw4kF3UhAxsirgyksr3vjVsXzo5o8kHZdqomNJGIZaIpxO32dSdLIuJkxkA+fXpjeZytnZ0TD6dvBnk4vyoVDPItu89BE4la9a0eLshfsIbmZ1FrEN1AXv396tXrvy2QcJtra1sezg7nFMFlfeACYPDLji0nnyETuTa91oNFxFNC5unsoGNMMezfn+DLm9efTA/iFQhangWvBJZqwVWxrKYXIROJmT2yks48nNdOptOEC8MpAwGm8ebnn4F9vDa1ES9AWjWGIder4aG58FaPZRERs7haWPjox4ZJ8h1rPDCQT5+ZN0+BIBazY3gA0uTRaoJTCw1YruyMgJg4jbhgh4GaTfCgVYeLVNVAAIXPT199/gxNxJBNuDx66x4IXNdoduUam7W/zZ0m3XN7txSaWRmccBjl7l+DC/rvUxRAXpE+U97a3IIm6x5IwnR9DiHBsJZOw4HqbPprQ8T5GjAWmpo6LeEMQ6bc1/DHp/8+BUR+JoHs7qxtwgG7HlxGCx9wVUFexSPIlvOcsdNMrXM/dn2zNJrCLnWmDQRS+PT09aunn0F4JfcEQHY8AqnxKoJurVxr6f4jWE3sxUQME3wKE4vPzimDZ8KSbIoH8wkEkf97+hT8/PSK3HEOIMoik1pB1tZ8SLCqeaHTxGLkgOPiAmtUUuRzj+JwxmGAXgHbeAMc5o3BQDwDwSvGBXE9pqitLg0gW7VscFzN6kCkkYtzulFMD6vSVRbV7NP9Qq9Q7Pj8t/Gv5xWIlm+JNFvmpxHNCBPRPXxZHkP4DAyoMw6D9AYU7j9P16legagr2RhaMNhEbJf/gkRiUW05czFr9+F5pE4nTwf6FjzM5REIp2YVfoPYiqMKb7c4AIvCSHSizs6nP6VLKZ3abnl4tpBaU1mdk0yxapgN2jR8sdNEcfKVrlyc0p2UhZmUhBtz/kbEEv5uT+9ZBi8Hb6hM1fWuhbbNfioRaCOFgatTuhJay0zl4Wwgpc2dTVhRzgvEUHOogcWyEEFSiExEOJrH1Sld6UyC30RMy4PZByDg11t6BtJSc6xeqLeULMPb9xUpRGKgTXqw0J4ho64ladyn5jE3kJZeqqubNpTCJNHtUvSwAiId6WBJZRnU4HBExaOER7XPC6Ssl6VKZ2pXfe+8M6sQ6Y/Nvl5oQWqMsjQ8cpub6/B1bpdpC1p7jpebzURKrdQEIu/kc8zNxc3sziqR7DJmxipKUvFgTtbWNmF6mRvIRrvV0q2EXNM3pZ8+kzndy1wwpzNDPVQiszPnFqU4HY/FAYFKmC5trBZm3G4+FKqGQqHjzPHMrhqR5dgIi3DY8rjBX5m8UCDtGSACH9TWIT3PZEJY1edm16wQWUYYiSk8bL6PeXdzEz12WSSQ+myfWb0ra1nn5jE0kD1oJMcXJrPG0dO8aCy+cLeB5qHwsK5P7wIQML0sEshGUAABlbASAdYf6gXkc9VQ9Ry8O4VgnpldOGjXICIUo8lcKGZwFyvaEAh014W6TFnmEwz+iiv81SRkhRoCDoNjxwWwEdMZnwqRhRpJJEvFYzlAgNcwuG81VWNkQeCJzhH2GTCQU/Qr9B2T3MsooRUZyaIiSZzAYceDWV8OEKg2L8DlImv81KKAF2owLQEgv5i7BasbySL8BnkLwcPmo9ubO2vwdX9zZwfGkhxo3EEwsJGHBnZt7exse7uKWqvZNnnykIP5BV3SXiiUObbsZlWMZAFIooS32LoLOu/+Nnbjo208sG13G+fh3DaesFvZ3l/sTNXnGRA6nuWZyHk1lLEZTEcYiekXhdKKwOHkLv6o8vY5IJLJQC7VC7tPEkaSjHn8q+jO4hg9sDjFQtjcPraU3RPFQk5wiZC/e7Lo1TKeV6u4MHuWMavMdGEjUZB48JxInMTh6C1IJzs4hsBYAj99RMQQSIbb2dm56/pK7JUDLRlgI6EM54haR4KYuKnnuZjiKyoOOm/ZAtkFfuyukmW2d9Y21SyzC17LIMtsurgMKkWY0x/2uNAxjekZkQA7oZvZjWlgHFF6HKjZj5YHKW1uIkOoKK/ltc0d5EPbm5tLWJQpepN3Go+nSUWiMgFQ7IbHsZFYkqCBQ6mLWFpRasVKCe8RUQI/W1LsM7+cld3cCCHRmUAoydnvLYCDs2JxzALCUGhg47htqWVesYqZYCYQCqKSVG4dvcsSLCAMhca/EQcUO8UEU9HBxDXFMAydxr8RB5LCBENRqKhoiHcYxr+eBpbKhFNmHiJpGKJRZbkI7suggcVqUFQuhJTN7BdDQxGripuSut3vC/RFrM6FEPNlwviqr/pn6f8BlcN038UjNx8AAAAASUVORK5CYII="
   , github: "#",
    live: "https://paradox-chatbot.vercel.app/"
  },
  {
    title: "Paradox Musico",
    description: "A modern music streaming platform where users can upload, discover, and listen to songs freely.",
    features: ["Music uploads", "Audio streaming", "Playlist system", "Modern music player UI"],
    tech: ["React", "Express", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&fm=webp&q=70&auto=format&fit=crop",
    github: "#",
    live: "https://paradox-songs.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-sm font-display tracking-widest text-brand-accent-from uppercase mb-4">
            03. Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Some things I've built.
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-accent-from/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  width={600}
                  height={338}
                  decoding="async"
                  className="w-full h-auto aspect-video object-cover rounded-2xl filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Project Info */}
              <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                <h3 className="text-3xl font-bold mb-6 font-display">{project.title}</h3>
                
                <div className={`glass p-6 md:p-8 rounded-2xl mb-6 relative z-20 ${index % 2 !== 0 ? '' : 'lg:-ml-12'}`}>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider text-left">Key Features:</p>
                    <ul className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`} aria-label={`${project.title} features`}>
                      {project.features.map(feature => (
                        <li key={feature} className="text-xs text-gray-300 glass-accent px-2 py-1 rounded-md">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-brand-accent-from mb-8 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`} aria-label={`${project.title} technologies used`}>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 text-gray-400 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                  <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="hover:text-white transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer" aria-label={`Visit live demo for ${project.title}`}>
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
