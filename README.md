<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Renove Beauty</title>
    <style>
        /* Reset básico */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f7f7f7; /* Fundo cinza claro */
            color: #333; /* Texto em cinza escuro */
            line-height: 1.6;
        }

        header {
            background-color: #ff6f61; /* Laranja suave */
            color: white;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra no header */
        }

        header h1 {
            margin: 0;
            font-size: 2rem; /* Tamanho de fonte grande */
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background-color: white; /* Fundo branco para o conteúdo */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); /* Sombra leve */
            border-radius: 10px; /* Bordas arredondadas */
        }

        section {
            margin-bottom: 40px;
        }

        h2 {
            color: #ff6f61;
            margin-bottom: 20px;
            font-size: 1.8rem;
            text-align: center;
            position: relative;
        }

        h2::after {
            content: '';
            width: 60px;
            height: 4px;
            background-color: #ff6f61;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }

        p {
            margin-bottom: 20px;
            color: #555; /* Texto em cinza */
            font-size: 1rem;
            line-height: 1.8;
        }

        .service ul {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        .service ul li {
            background-color: #fff;
            flex: 1 1 calc(33.333% - 20px); /* Três colunas com espaço entre elas */
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }

        .service ul li:hover {
            transform: translateY(-5px);
        }

        .service img {
            display: block;
            margin: 10px auto 20px auto;
            width: 100%; /* Largura completa dentro do card */
            height: auto; /* Proporção mantida */
            border-radius: 8px; /* Bordas arredondadas */
        }

        .service h3 {
            margin: 0;
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 10px;
            text-align: center;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 40px;
        }

        footer p {
            margin: 0;
            font-size: 0.9rem;
        }

        form input, form textarea, form button {
            width: 100%;
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
        }

        form button {
            background-color: #ff6f61;
            color: white;
            cursor: pointer;
            border: none;
            transition: background-color 0.3s ease;
        }

        form button:hover {
            background-color: #ff4d4d; /* Tom mais escuro ao passar o mouse */
        }

        form {
            max-width: 600px;
            margin: 0 auto;
        }

        /* Responsividade para tablets e dispositivos menores */
        @media (max-width: 768px) {
            header h1 {
                font-size: 1.8rem;
            }

            h2 {
                font-size: 1.6rem;
            }

            .service ul li {
                flex: 1 1 100%; /* Layout em uma coluna para dispositivos menores */
            }

            .container {
                margin: 20px auto;
                padding: 15px;
            }
        }

        /* Responsividade para dispositivos móveis */
        @media (max-width: 480px) {
            header h1 {
                font-size: 1.5rem;
            }

            h2 {
                font-size: 1.4rem;
            }

            p {
                font-size: 0.9rem;
            }

            .container {
                width: 100%;
                margin: 15px auto;
                padding: 10px;
            }

            .service img {
                margin: 5px auto 15px auto;
            }

            .service h3 {
                font-size: 1.2rem;
            }

            form input, form textarea, form button {
                padding: 10px;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Renove Beauty</h1>
    </header>

    <div class="container">
        <section>
            <h2>Sobre Nós</h2>
            <p>Na Renove Beauty, acreditamos que a beleza vai além da aparência; é uma expressão de bem-estar, confiança e autenticidade. Nossa missão é proporcionar uma experiência transformadora, onde cada cliente se sente valorizado e especial.</p>
            <p>Com uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem, oferecemos tratamentos personalizados que combinam o melhor da tecnologia estética com um toque humano. Desde tratamentos faciais revitalizantes até massagens corporais relaxantes, cada detalhe é cuidadosamente pensado para garantir resultados visíveis e duradouros.</p>
            <p>Nosso compromisso é com a excelência, utilizando apenas produtos de alta qualidade e técnicas avançadas para realçar a beleza natural de cada pessoa. Acreditamos que todos merecem se sentir bem consigo mesmos, e estamos aqui para ajudar você a alcançar seu melhor eu.</p>
            <p>Seja qual for o seu objetivo de beleza, na Renove Beauty, você encontrará um ambiente acolhedor e uma equipe dedicada a cuidar de você com carinho e profissionalismo. Venha nos visitar e descubra como podemos ajudá-lo(a) a renovar sua beleza e autoestima.</p>
        </section>

        <section class="service">
            <h2>Nossos Serviços</h2>
            <ul>
                <li>
                    <h3>Tratamento Facial</h3>
                    <img src="https://esteticafacialbrasilia.com.br/wp-content/uploads/2022/04/7-beneficios-da-Limpeza-de-pele-saiba-tudo-sobre-o-tratamento-mais-procurado.jpg" alt="Tratamento Facial">
                </li>
                <li>
                    <h3>Massagem Corporal</h3>
                    <img src="https://jovittaestetica.com.br/wp-content/uploads/2024/01/post-Drenagem-linfatica-e-seus-beneficios-para-o-corpo.webp" alt="Massagem Corporal">
                </li>
                <li>
                    <h3>Depilação a Laser</h3>
                    <img src="https://dermage.pt/wp-content/uploads/depilacao-a-laser-10-dicas-para-obter-resultados-mais-rapidos.jpg" alt="Depilação a Laser">
                </li>
            </ul>
        </section>
        <section>
            <h2>Contato</h2>
            <p>Telefone: (11) 1234-5678</p>
            <p>E-mail: contato@clinicadeestetica.com</p>
        </section>

        <section>
            <h2>Agende Sua Consulta</h2>
            <form action="#" method="post">
                <inp
