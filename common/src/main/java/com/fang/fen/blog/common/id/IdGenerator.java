package com.fang.fen.blog.common.id;

import org.hibernate.HibernateException;
import org.hibernate.MappingException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.Configurable;
import org.hibernate.id.IdentifierGenerator;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;

import java.io.Serializable;
import java.util.Properties;

public class IdGenerator implements Configurable, IdentifierGenerator {

    public Long dataCenterId;
    public Long workerId;

    @Override
    public void configure(Type type, Properties params, ServiceRegistry serviceRegistry) throws MappingException {
        this.dataCenterId = Long.valueOf(params.getProperty("dataCenterId"));
        this.workerId = Long.valueOf(params.getProperty("workerId"));
    }

    @Override
    public Serializable generate(SessionImplementor session, Object object) throws HibernateException {
        IdWorker idWorker = new IdWorker(workerId, dataCenterId);
        return idWorker.nextId();
    }


}
